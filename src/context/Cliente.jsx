import React,{useEffect , useState} from 'react'

import axios from 'axios';
import { configure } from '@testing-library/react';


let ClienteContext = React.createContext();
let {Provider, Consumer} = ClienteContext;



const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaG9uIiwiaWF0IjoxNjQ5NDUyNTI0LCJleHAiOjE2NDk0NTM0MjR9.4ka6GMCOIzhpWj5jqkcam8k-PkU8WeCNN6CCCpqJujc'
const apiURL  = 'https://api-valorant.herokuapp.com/'

let reqInstance = axios.create({
  headers: {
    Authorization : `Bearer ${accessToken}`
    }
  }
)



const ClienteProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ cliente , setCliente] = useState([])
    const [ idCliente , setIdCliente]=useState(0)




    
    

    /********************** G E T -- C L I E N T E  ********************************* */
  

      const getLogin= async ()=>{   
        await axios.post(apiURL +'auth/log-in', {
          password: "123",
          username: "jhon"
      }).then(({data})=>{
           console.log(data)
           alert(data.token)
           localStorage.setItem("token" , data.token)

        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }

      const getAgent= async ()=>{   
        await reqInstance.get(apiURL +'agents')
        .then(({data})=>{
           console.log(data)

        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }






    return(
        <Provider value={{getLogin, getAgent}}>
        {children}
    </Provider>
    )
}



export  {ClienteProvider, Consumer as ClienteConsumer ,ClienteContext};
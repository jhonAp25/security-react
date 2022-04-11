import React, { useContext, useEffect } from 'react'
import { ClienteContext } from '../context/Cliente'
import { Button } from 'antd'




const Table = () => {


    const {getLogin , getAgent}= useContext(ClienteContext)
    

    const login=()=>{
      getLogin()
      console.log("HOLAAA")
    }

    
    useEffect(() => {

        getAgent()
    

    
    
    }, [ ])

  return (
    <div>
        <Button onClick={()=> login() } type="primary">Login</Button>
    



    </div>
  )
}

export default Table
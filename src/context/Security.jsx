import axios from 'axios'
import React, { useState } from 'react'

const Security = () => {
    const [error , setError] = useState()

    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaG9uIiwiaWF0IjoxNjQ5NDQzNDY0LCJleHAiOjE2NDk0NDQzNjR9.Ie0H__DtKPcR9vPzcEVec4pAt7SO3Mu_2uhYnrc7g7I'
    const apiURL  = 'https://api-valorant.herokuapp.com'


    const  authAxios = axios.create({
        baseURL : apiURL,
        headers : {
            Authorization:  `Bearer: ${accessToken}`
        }
    })
}

export default Security 
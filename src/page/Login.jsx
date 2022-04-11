import React from 'react'
import FormLogin from '../components/FormLogin'
import { Row, Col } from 'antd';

const Login = () => {
  return (
    <div>
        
        <Row>
            <Col span={12}  offset={6}> <FormLogin></FormLogin></Col>
        </Row>
       
    </div>
  )
}

export default Login
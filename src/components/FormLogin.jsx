import React from 'react'
import { Input, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const FormLogin = () => {
  return (
     <div>
         <Space direction="vertical" size="small" style={{ display: 'flex' }} >

        
         <Input placeholder="User " prefix={<UserOutlined />} />
         <Input.Password placeholder="Password" />
        <Space>
        <Button type="primary"  >Primadry Button</Button>
        </Space>

        </Space>
     </div>
  )
    }
    
export default FormLogin
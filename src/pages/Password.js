import React from 'react'
import { Breadcrumb } from 'antd'

const Password = () => {
return(
  <>
   <div className='innerlayout'>
          <Breadcrumb separator=">">
            <Breadcrumb.Item> App Market</Breadcrumb.Item>
            <Breadcrumb.Item href="">會員中心</Breadcrumb.Item>
            <Breadcrumb.Item href="">變更密碼</Breadcrumb.Item>
          </Breadcrumb>
        <div className='headtitle'>
          變更密碼
        </div>
      </div>
  </>
)
}
export default Password
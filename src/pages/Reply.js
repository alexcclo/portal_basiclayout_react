import React from 'react'
import { Breadcrumb } from 'antd'

const Reply= () => {
return(
  <>
   <div className='innerlayout'>
          <Breadcrumb separator=">">
            <Breadcrumb.Item> App Market</Breadcrumb.Item>
            <Breadcrumb.Item href="">會員中心</Breadcrumb.Item>
            <Breadcrumb.Item href="">我的評價</Breadcrumb.Item>
          </Breadcrumb>
        <div className='headtitle'>
          我的評價
        </div>
      </div>
  </>
)
}
export default Reply
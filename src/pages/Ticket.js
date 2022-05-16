import React from 'react'
import { Breadcrumb } from 'antd'

const Ticket= () => {
return(
  <>
   <div className='innerlayout'>
          <Breadcrumb separator=">">
            <Breadcrumb.Item> App Market</Breadcrumb.Item>
            <Breadcrumb.Item href="">會員中心</Breadcrumb.Item>
            <Breadcrumb.Item href="">優惠卷</Breadcrumb.Item>
          </Breadcrumb>
        <div className='headtitle'>
          優惠卷
        </div>
      </div>
  </>
)
}
export default Ticket
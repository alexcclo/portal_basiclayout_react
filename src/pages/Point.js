import React from 'react'
import { Breadcrumb } from 'antd'

const Point = () => {
return(
  <>
   <div className='innerlayout'>
          <Breadcrumb separator=">">
            <Breadcrumb.Item> App Market</Breadcrumb.Item>
            <Breadcrumb.Item href="">會員中心</Breadcrumb.Item>
            <Breadcrumb.Item href="">儲值點數</Breadcrumb.Item>
          </Breadcrumb>
        <div className='headtitle'>
          儲值點數
        </div>
      </div>
  </>
)
}
export default Point
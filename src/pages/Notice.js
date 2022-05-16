import React from 'react'
import { Breadcrumb } from 'antd'

const Notice= () => {
return(
  <>
   <div className='innerlayout'>
          <Breadcrumb separator=">">
            <Breadcrumb.Item> App Market</Breadcrumb.Item>
            <Breadcrumb.Item href="">會員中心</Breadcrumb.Item>
            <Breadcrumb.Item href="">通知總覽</Breadcrumb.Item>
          </Breadcrumb>
        <div className='headtitle'>
          通知總覽
        </div>
      </div>
  </>
)
}
export default Notice
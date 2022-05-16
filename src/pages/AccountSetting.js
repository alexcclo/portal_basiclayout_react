import React from 'react'
import UserTable from 'components/UserTable'
import AdminUserTable from 'components/AdminUserTable'
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd'

const AccountSetting = (props) => {
  
return(
  <>
  <div className='innerlayout'>
          <Breadcrumb separator=">">
            <Breadcrumb.Item> App Market</Breadcrumb.Item>
            <Breadcrumb.Item href="">會員中心</Breadcrumb.Item>
            <Breadcrumb.Item href="">帳號管理</Breadcrumb.Item>
          </Breadcrumb>
        <div className='headtitle'>
          帳號管理
        </div>
      </div>
  <div style={{ fontSize: 20, fontWeight: 'bold' }}>
      {props.LoginInfo.userType === 1 ? <AdminUserTable /> : <UserTable />}
    </div>
    </>
  )
}
const mapStateToProps = store => (
  { LoginInfo: store.LoginInfo }
)
export default connect(mapStateToProps, null)(AccountSetting)
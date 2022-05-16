import React from 'react'
import UserTable from 'components/UserTable'
import AdminUserTable from 'components/AdminUserTable'
import { connect } from 'react-redux'

//判斷user是否為portal admin傳入不同component
const AdminUser = (props) => 
  <div style={{fontSize: 20, fontWeight: 'bold'}}> 
    {props.LoginInfo.userType === 1 ? <AdminUserTable/> : <UserTable/>}
  </div>
  //redux傳入user資訊
  const mapStateToProps = store => (
    { LoginInfo: store.LoginInfo }
  )
export default connect(mapStateToProps, null)(AdminUser)
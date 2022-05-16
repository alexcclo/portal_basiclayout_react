/* eslint-disable */
import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { connect, useDispatch } from 'react-redux'
import { useMsal, useIsAuthenticated } from "@azure/msal-react"
import { loginRequest } from "../authConfig"
import { Button, Layout, Row, Col } from 'antd'
import { WindowsOutlined, GoogleOutlined, AmazonCircleFilled } from '@ant-design/icons'
import { saveLoginInfo, clearLoginInfo } from '../redux/auth'
import { history } from 'redux/store'
import { Form, Input, Checkbox } from 'antd';
import { Image } from 'antd';
import PageHeader from "components/PageHeader";
import { Typography } from 'antd';
import logoImage from 'images/login_left.png'
import { login } from 'api/hub'
import { get_landingpage } from 'api/hub'
import { Breadcrumb } from 'antd'
import { Radio } from 'antd';
// import { useHistory } from 'react-router-dom'
const { Title } = Typography;
const AccountBasic= (props) => {
  const dispatch = useDispatch()
  // const history = useHistory()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [loginLoadingStatus, setLoginLoadingStatus] = useState(false)
  const options = [
    { label: '全部', value: '1' },
    { label: '申請中', value: '2', disabled: true },
    { label: '已報價', value: '3', disabled: true },
    { label: '待付款', value: '4', disabled: true },
    { label: '已付款', value: '5', disabled: true },
    { label: '已啟用', value: '6' },
    { label: '已停用', value: '7', disabled: true },
    { label: '已取消', value: '8', disabled: true },
  ]
  const onChange = e => {
    console.log(e);
  }
  useEffect(() => {
    console.log(props.LoginInfo)
  } )
  const { Header, Footer, Sider, Content } = Layout;
  
  return (
    <>
       <div className='innerlayout'>
          <Breadcrumb separator=">">
            <Breadcrumb.Item> App Market</Breadcrumb.Item>
            <Breadcrumb.Item href="">會員中心</Breadcrumb.Item>
            <Breadcrumb.Item href="">基本資料管理</Breadcrumb.Item>
          </Breadcrumb>
        <div className='headtitle'>
          基本資料管理
        </div>
      </div>
    </>
  )
}
// 將store中的items值傳綁到props上
const mapStateToProps = store => (
  { LoginInfo: store.LoginInfo }
)
const mapDispatchToProps = dispatch => {
  return {
    saveLoginInfo: (payload) => {
      dispatch(saveLoginInfo(payload))
    },
    clearLoginInfo: () => {
      dispatch(clearLoginInfo())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountBasic)
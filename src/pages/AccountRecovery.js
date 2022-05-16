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
import { Breadcrumb } from 'antd';
import { message, Space } from 'antd';
// import { useHistory } from 'react-router-dom'
const { Title } = Typography;
const AccountRecovery = (props) => {
  const { instance } = useMsal()
  const dispatch = useDispatch()
  // const history = useHistory()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [loginLoadingStatus, setLoginLoadingStatus] = useState(false)
  const onFinish = (values) => {
    message.success({
      content:"Email已送出請至信箱收取信件更新密碼",
      className:"popupmessage"
    }
      );
    history.push('/forgetpassword')
    }
  useEffect(() => {
    console.log(props.LoginInfo)
    // handleLogin()
  } )
  const { Header, Footer, Sider, Content } = Layout;
  //登入function(MSAL)
  function handleLogin(values) {
    setLoginLoadingStatus(() => true)
    dispatch(login(values))
    .then(resp => {
      props.saveLoginInfo({
        accessToken: resp.accessToken,
        loginType: 'MS',
        tenantId: resp.tenantId,
        userName: resp.account.name,
        account: resp.account.username,
        isAuthenticated: true,
        userType: 1
      })
      sessionStorage['accessToken'] = resp.accessToken
      setLoginLoadingStatus(() => false)
      history.push('/portal')
    })
    .catch(e => {
        setLoginLoadingStatus(() => false)
        console.error(e)
    })
  }
  //登出function(MSAL)
  function handleLogout(instance) {
    instance.logoutPopup()
    .then(() => {
      props.clearLoginInfo()
    })
    .catch(e => {
        console.error(e);
    });
  }
  return (
    <>
      <Header>
        <PageHeader/>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <div className="wiforgot">
            <div className='title'>
              帳號救援
            </div>
            <div className='block'>
            </div>
            <Form
              name="basic"
              labelCol={{ span: 2 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div>
                請輸入您您註冊時您註冊時使用的Email
              </div>
              <div className='block'>
            </div>
              <Form.Item
                name="Password"
                rules={[{ message: 'Please input your password!' }]}
              >
                <Input placeholder="example@email.com" size='large' />
              </Form.Item>
              <Col span={24}>
                <Form.Item>
                  <div className="wibtn">
                    <Button type="primary" htmlType="submit">繼續</Button>
                  </div>
                </Form.Item>
              </Col>
            </Form>
              <div className="wiLink">
                <div className="paragraph center">忘記帳號了?請聯絡<a>客服窗口</a></div>
              </div>
          </div>
        </div>
      </Content>
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
export default connect(mapStateToProps, mapDispatchToProps)(AccountRecovery)
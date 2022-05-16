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
const Forget = (props) => {
  const { instance } = useMsal()
  const dispatch = useDispatch()
  // const history = useHistory()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [loginLoadingStatus, setLoginLoadingStatus] = useState(false)
  const onFinish = (values) => {
    message.success({
      content:"已成功變更密碼",
      className:"popupmessage"
    }
      );
    }
  useEffect(() => {
    console.log(props.LoginInfo)
    console.log(window.location.search)
    if(window.location.search){
      history.push("/forgetpassword")
    }
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
              設定新密碼
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
              <Form.Item
                name="Email"
                rules={[{ message: 'Please input your Email!' }]}
              >
                <Input size='large' prefix="新密碼"/>
              </Form.Item>
              <Form.Item
                name="Password"
                rules={[{ message: 'Please input your password!' }]}
              >
                <Input.Password size='large' prefix="確認新密碼"/>
              </Form.Item>
              <Col span={24}>
                <Form.Item>
                  <div className="wibtn">
                    <Button type="primary" htmlType="submit">送出</Button>
                  </div>
                </Form.Item>
              </Col>
            </Form>
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
export default connect(mapStateToProps, mapDispatchToProps)(Forget)
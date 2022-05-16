/* eslint-disable */
import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Button, Layout, Col, Form, Input, message } from 'antd'
import { saveLoginInfo, clearLoginInfo } from '../redux/auth'
import { history } from 'redux/store'

import PageHeader from "components/PageHeader";
import logoImage from 'images/login_left.png'
// api connection
import { login } from 'api/hub'
import { useTranslation } from 'react-i18next'

const Login = (props) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(()=>{
    if(localStorage.getItem('LoginInfo')){
      history.push('/portal/service')
    }
  },[])


  // get ip location
  var ipLocation
  useEffect(() => {
    fetch('https://ipapi.co/json/')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      ipLocation = data.ip
    })
  })
  // Login Loading Status
  const [loginLoadingStatus, setLoginLoadingStatus] = useState(false)
  
  // Dev Testing Function
  const logintest = () => {
    localStorage.setItem('LoginInfo', JSON.stringify({
      accessToken: '',
      loginType: ' App Market',
      tenantId: '',
      userName: 'TEST',
      account: 'TEST',
      isAuthenticated: true,
      profilePhoto: '0',
      userType: 1
    }))
    console.log(localStorage.getItem('LoginInfo'))
    history.push('/portal/service')
  }

  const handleLogin = (values) => {
    setLoginLoadingStatus(() => true)
    console.log(ipLocation)
    console.log(values)
    dispatch(login({...values,remote_ip:ipLocation})).then(
      res=>{
        console.log(res)
        if(res){
          if(res.message === "Success") {
            localStorage.setItem('LoginInfo', JSON.stringify({
              accessToken: res.data.access_token,
              loginType: ' App Market',
              tenantId: res.data.tenant_data.tenant_id,
              userName: res.data.user_data.nick_name,
              account: res.data.user_data.account,
              isAuthenticated: true,
              profilePhoto: res.data.user_data.profile_photo,
              userType: 1
            }))
            setLoginLoadingStatus(() => false)
            history.push('/portal/service')
          }
          else {
            res.validated_messages.map(
              item => {
                console.log(item.message)
                if(sessionStorage.getItem('lang') === 'tw'?item.tw:item.en){
                  message.error({
                    content:sessionStorage.getItem('lang') === 'tw'?item.tw:item.en,
                    className:"popupmessage"
                  })
                }
              }
            )
            setLoginLoadingStatus(() => false)
          }
        }
        else {
          setLoginLoadingStatus(() => false)
          message.error({
              content:"API CONNECTION ERROR",
              className:"popupmessage"
            })
        }
      }
    )
    }
  useEffect(() => {
    console.log(props)
  } )
  // Antd content
  const { Header, Content } = Layout;
  
  return (
    <>
      <div className="outerWrap">
          <Header>
            <PageHeader/>
          </Header>
          <Content>
            <div className="mainArea">
              <div className="contentBox">
                <div className="wrap flexBox">
                    {/* Left */}
                    <Col xs={24} xl={11}>
                      <div className="loginBorderBox">
                        <div className='titleBox'>
                          <div className='h2Title center'><span>Welcome</span></div>
                          <div className='h3Title center'> App Market</div>
                        </div>
                        <div className="loginImg">
                          <img alt=' App Market' src={logoImage}/>
                        </div>
                      </div>
                    </Col>
                    <Col xs={0} xl={1}>
                      <div className="lineInTheMiddle"></div>
                    </Col>
                    {/* Right */}
                    <Col xs={24} xl={12}>
                      <div className="loginBorderBox">
                        <div className="borderLeft">
                          <div className='titleBox'>
                            <div className="h2Title center loginTitle">Login</div>
                          </div>
                          <div className='loginBox'>
                            <div className='login'>
                              <div className="wiForm">
                                <Form
                                  name="basic"
                                  labelCol={{ span: 2 }}
                                  wrapperCol={{ span: 24 }}
                                  initialValues={{ remember: true }}
                                  //onFinish={handleLogin}
                                  onFinish={logintest}
                                  // onFinishFailed={onFinishFailed}
                                  autoComplete="off"
                                >
                                  <Form.Item
                                    name="account"
                                    rules={[{ 
                                      required: true,
                                      message: 'Please input your Email!' 
                                    }]}
                                  >
                                    <Input size='large' prefix="Email"/>
                                  </Form.Item>
                                  <Form.Item
                                    name="password"
                                    rules={[{ 
                                      required: true,
                                      message: 'Please input your password!' 
                                    }]}
                                  >
                                    <Input.Password size='large' prefix={t('Login.password')}/>
                                  </Form.Item>
                                  <div className="wiLink">
                                    <div className="paragraph right"><a href='/AccountRecovery'>{t('Login.forgot_password')}</a></div>
                                  </div>
                                  <Col span={24}>
                                    <Form.Item>
                                      <div className="wibtn">
                                        <Button loading={loginLoadingStatus} type="primary" htmlType="submit">{t('Login.login')}</Button>
                                      </div>
                                    </Form.Item>
                                  </Col>
                                  <div className="wiLink">
                                    <div className="paragraph center">{t('Login.new_to__app_market')}<a href='/Register/Agreement'>{t('Login.create_a_new_account')}</a></div>
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                </div>
              </div>
            </div>
          </Content>
      </div>
    </>
  )
}
// Store Item in Props
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
export default connect(mapStateToProps, mapDispatchToProps)(Login)
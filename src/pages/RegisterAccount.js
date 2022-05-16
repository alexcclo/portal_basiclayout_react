/* eslint-disable */
import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { connect, useDispatch } from 'react-redux'
import { Button, Layout, Row, Col } from 'antd'
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
import { message, Space, Steps  } from 'antd';
import userIconImage from 'images/icon-member.svg';
import { useTranslation } from 'react-i18next'
// import { useHistory } from 'react-router-dom'

const RegisterAccount = (props) => {
const { Step } = Steps;
const dispatch = useDispatch()
const { t } = useTranslation()
const handleAgree = () => {
    history.push('/Register/Company')
}

const handleReturn = () => {
  history.push('/Register/Privacy')
}

const { Header, Content } = Layout;
  
return (
<>
    <Header>
        <PageHeader/>
    </Header>
        <Content style={{ padding: '0 50px' }}>
            <div className='middletitle'>
                Register
            </div>
        <div className="registerlayout">
            <Steps current={0}>
                <Step title={t('Register.create_account')} />
                <Step title={t('Register.company_info')} />
                <Step title={t('Register.member_info')}/>
                <Step title={t('Register.success')}/>
            </Steps>
        <Form
            name="basic"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
        <div className='flex'>
            <div className="wiForm">
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
                name="nickname"
                rules={[{ 
                    required: true,
                    message: 'Please input your nickname!' 
                }]}
                >
                    <Input size='large' prefix="暱稱"/>
                </Form.Item>
            </div>
            <div className='uploadlayout'>
                <div className='image'>
                    <img className='user' alt='user icon' src={userIconImage}></img>
                </div>
                <div className='uploadbutton'>
                    <Button type="primary" >上傳頭像</Button>
                    <Button type="link" >刪除頭像</Button>
                </div>
            </div>
            </div>
            <div>
            <div className="wibtnagreeA">
                <div className='mid'>
                    <div className='btnleft'>
                    <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={handleReturn}>上一頁</Button>
                    </Form.Item>
                    </div>
                    <div className='block'></div>
                    <div className='btnright'>
                    <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={handleAgree}>下一頁</Button>
                    </Form.Item>
                    </div>
                </div>
            </div>
        </div>
            </Form>
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterAccount)
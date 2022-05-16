/* eslint-disable */
import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { connect, useDispatch } from 'react-redux'
import { Button, Layout, Form, Input,message, Steps, Select, Cascader} from 'antd'
import { saveLoginInfo, clearLoginInfo } from '../redux/auth'
import { history } from 'redux/store'
import PageHeader from "components/PageHeader";
import { useTranslation } from 'react-i18next'
import SuccessImage from 'images/register_success.svg'
// import { useHistory } from 'react-router-dom'

const RegisterSuccess = (props) => {
const { Step } = Steps;

// i18n language switch
const { t } = useTranslation()
console.log(sessionStorage.getItem('lang'))

const dispatch = useDispatch()
// const history = useHistory()
const onFinish = (values) => {
message.success({
    content:"Success",
    className:"popupmessage"
}
    );
history.push('/forgetpassword')
}
const handleAgree = () => {
    // onFinish()
    history.push('/auth/login')
}

const handleReturn = () => {
  history.push('/Register/Member')
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
                <Steps current={3}>
                    <Step title={t('Register.create_account')} />
                    <Step title={t('Register.company_info')} />
                    <Step title={t('Register.member_info')}/>
                    <Step title={t('Register.success')}/>
                </Steps>
                <div className='successImage'>
                    <img alt='Success_Image' src={SuccessImage}/>
                </div>
                <div className='middletitlem'>
                    Thanks for signing up.
                </div>
                <div className='middletitles'>
                Please check your email for the
                <br/>
                comfirmation message we just sent you.
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterSuccess)
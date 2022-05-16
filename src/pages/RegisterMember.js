/* eslint-disable */
import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { connect, useDispatch } from 'react-redux'
import { Button, Layout, Form, Input,message, Steps, Select, Cascader} from 'antd'
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'
import { saveLoginInfo, clearLoginInfo } from '../redux/auth'
import { history } from 'redux/store'
import PageHeader from "components/PageHeader";
import { useTranslation } from 'react-i18next'
// import { useHistory } from 'react-router-dom'

const RegisterMember = (props) => {
const { Step } = Steps;

const [equal, setequals] = useState(false);
const [select, setselect] = useState("tw");

const handleequal = () => {
    equal?setequals(() => false): setequals(() => true)
}

// i18n language switch
const { t } = useTranslation()
console.log(sessionStorage.getItem('lang'))

const handleChange = (value) => {
    setselect(()=>value)
    console.log(select)
}

const handleAgree = () => {
    // onFinish()
    history.push('/Register/Success')
}

const handleReturn = () => {
  history.push('/Register/Company')
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
            <Steps current={2}>
                <Step title={t('Register.create_account')} />
                <Step title={t('Register.company_info')} />
                <Step title={t('Register.member_info')}/>
                <Step title={t('Register.success')}/>
            </Steps>
            <div className={sessionStorage.getItem('lang') === "en"? "wiFormCEN": "wiFormC" } >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className='cinfotitle'>
                        {t('Register.company_representative')}
                    </div>
                    <div className='flexForm'>
                        <Form.Item
                        name="first_name"
                        rules={[{ 
                            required: true,
                            message: 'Please input your first name' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.first_name')} placeholder={t('Register.da_ming')} />
                        </Form.Item>
                        <div className='block'/>
                        <Form.Item
                        name="last_name"
                        rules={[{ 
                            required: true,
                            message: 'Please input your last name' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.last_name')} placeholder={t('Register.wang')}/>
                        </Form.Item>
                    </div>
                    <div className='flexForm'>
                        <Form.Item
                        name="position"
                        rules={[{ 
                            required: true,
                            message: 'Please input your position' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.position')}/>
                        </Form.Item>
                        <div className='block'/>
                        <Form.Item
                        name="mobile_phone"
                        rules={[{ 
                            required: true,
                            message: 'Please input your mobile phone' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.mobile_phone')} placeholder='+886 900 000 000'/>
                        </Form.Item>
                    </div>
                    <div className='flexForm'>
                        <Form.Item
                        name="phone"
                        rules={[{ 
                            required: true,
                            message: 'Please input your phone number' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.phone')} placeholder={t('Register.phone')}/>
                        </Form.Item>
                        <div className='block'/>
                        <Form.Item
                        name="ext_number"
                        rules={[{ 
                            // required: true,
                            message: 'Please input your ext_number' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.ext_number')}/>
                        </Form.Item>
                    </div>
                    <div className='flexForm'>
                        <Form.Item
                        name="Email"
                        rules={[{ 
                            required: true,
                            message: 'Please input your Email' 
                        }]}
                        >
                            <Input size='large' prefix='Email' placeholder='example@mail.com'/>
                        </Form.Item>
                        <div className='block'/>
                        <Form.Item
                        name="language"
                        rules={[{ 
                            required: true,
                            message: 'Please select your language' 
                        }]}
                        >
                        <div className='dropDowninput'>
                            <div className='title'>
                                {t('Register.language')}
                            </div>
                            <Select defaultValue="tw" onChange={handleChange}>
                                <Option value="tw">中文</Option>
                                <Option value="en">English</Option>
                            </Select>
                        </div>
                    </Form.Item>
                    </div>
                    <div className='flexForm'>
                    <div className='cinfotitle'>
                        {t('Register.primary_contact')}
                    </div>
                    <div className='wibtncheck'>
                        {
                        equal?
                        <Button type="primary" icon={<CheckCircleFilled/>} onClick={handleequal}>
                            同公司代表人
                        </Button>:
                        <Button type="primary" onClick={handleequal}>
                        同公司代表人
                        </Button>
                        }
                    </div>
                    </div>
                    <div className='flexForm'>
                        <Form.Item
                        name={equal?"first_name":"first_name_p"}
                        rules={[{ 
                            required: true,
                            message: 'Please input your first name' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.first_name')} placeholder={t('Register.da_ming')} />
                        </Form.Item>
                        <div className='block'/>
                        <Form.Item
                        name={equal?"last_name":"last_name_p"}
                        rules={[{ 
                            required: true,
                            message: 'Please input your last name' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.last_name')} placeholder={t('Register.wang')}/>
                        </Form.Item>
                    </div>
                    <div className='flexForm'>
                        <Form.Item
                        name={equal?"position":"position_p"}
                        rules={[{ 
                            required: true,
                            message: 'Please input your position' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.position')}/>
                        </Form.Item>
                        <div className='block'/>
                        <Form.Item
                        name={equal?"mobile_phone":"mobile_phone_p"}
                        rules={[{ 
                            required: true,
                            message: 'Please input your mobile phone' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.mobile_phone')} placeholder='+886 900 000 000'/>
                        </Form.Item>
                    </div>
                    <div className='flexForm'>
                        <Form.Item
                        name={equal?"phone":"phone_p"}
                        rules={[{ 
                            required: true,
                            message: 'Please input your phone number' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.phone')} placeholder={t('Register.phone')}/>
                        </Form.Item>
                        <div className='block'/>
                        <Form.Item
                        name={equal?"ext_number":"ext_number_p"}
                        rules={[{ 
                            // required: true,
                            message: 'Please input your ext_number' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.ext_number')}/>
                        </Form.Item>
                    </div>
                    <div className='flexForm'>
                        <Form.Item
                        name={equal?"Email":"Email_p"}
                        rules={[{ 
                            required: true,
                            message: 'Please input your Email' 
                        }]}
                        >
                            <Input size='large' prefix='Email' placeholder='example@mail.com'/>
                        </Form.Item>
                        <div className='block'/>
                        <Form.Item
                        name={equal?"language":"language_p"}
                        rules={[{ 
                            required: true,
                            message: 'Please select your language' 
                        }]}
                        >
                        <div className='dropDowninput'>
                            <div className='title'>
                                {t('Register.language')}
                            </div>
                            <Select defaultValue={equal?select:"tw"} value={equal?select:"tw"}>
                                <Option value="tw">中文</Option>
                                <Option value="en">English</Option>
                            </Select>
                        </div>
                    </Form.Item>
                    </div>
                    <div className="wibtnagreeC">
                        <div className='mid'>
                            <div className='btnleft'>
                            <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={handleReturn}>{t('Register.back')}</Button>
                            </Form.Item>
                            </div>
                            <div className='block'></div>
                            <div className='btnright'>
                            <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={handleAgree}>{t('Register.next')}</Button>
                            </Form.Item>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
        <div className='hblock'/>
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterMember)
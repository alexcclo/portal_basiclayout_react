/* eslint-disable */
import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { connect, useDispatch } from 'react-redux'
import { Button, Layout, Form, Input,message, Steps, Select, Cascader} from 'antd'
import { saveLoginInfo, clearLoginInfo } from '../redux/auth'
import { history } from 'redux/store'
import PageHeader from "components/PageHeader"
import { useTranslation } from 'react-i18next'
import industry from 'api/industry.json'
// import { useHistory } from 'react-router-dom'

const RegisterCompany = (props) => {
const { Step } = Steps;

// i18n language switch
const { t } = useTranslation()
console.log(sessionStorage.getItem('lang'))

const options = industry
  const dispatch = useDispatch()
  // const history = useHistory()
  const onFinish = (values) => {
    // message.success({
    //   content:"Success",
    //   className:"popupmessage"
    // }
    //   );
    history.push('/Register/Member')
    }
const handleAgree = () => {
    // onFinish()
    history.push('/Register/Member')
}

const handleReturn = () => {
  history.push('/Register/Account')
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
            <Steps current={1}>
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
                    <Form.Item
                    name="company_name"
                    rules={[{ 
                        required: true,
                        message: 'Please input your company name' 
                    }]}
                    >
                        <Input size='large' prefix={t('Register.company_name')}/>
                    </Form.Item>
                    <Form.Item
                    name="company_name_english"
                    rules={[{ 
                        required: true,
                        message: 'Please input your company name english' 
                    }]}
                    >
                        <Input size='large' prefix={t('Register.company_name_english')}/>
                    </Form.Item>
                    <div className='flexForm'>
                        <Form.Item
                        name="tax_id_number"
                        rules={[{ 
                            required: true,
                            message: 'Please input your tax id number' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.tax_id_number')}/>
                        </Form.Item>
                        <div className='block'/>
                        <Form.Item
                        name="duns_number"
                        rules={[{ 
                            required: true,
                            message: 'Please input your D.U.N.S number' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.duns_number')}/>
                        </Form.Item>
                    </div>
                    <Form.Item
                        name="company_scale"
                        rules={[{ 
                            required: true,
                            message: 'Please select your company scale' 
                        }]}
                        >
                        <div className='dropDowninput'>
                            <div className='title'>
                                {t('Register.company_scale')}
                            </div>
                            <Select defaultValue="0">
                                <Option value="0">1 - 30 poeple</Option>
                                <Option value="1">30 - 100 people</Option>
                            </Select>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="industry"
                        rules={[{ 
                            required: true,
                            message: 'Please select your industry' 
                        }]}
                        >
                        <div className='mutidropDowninput'>
                            <div className='title'>
                                {t('Register.industry')}
                            </div>
                            <Cascader
                                style={{ width: '100%' }}
                                options={options}
                                // onChange={onChange}
                                multiple
                                maxTagCount="5"
                                />
                        </div>
                    </Form.Item>
                    <div className='cinfotitle'>
                        {t('Register.company_address')}
                    </div>
                    <Form.Item
                        name="country_region"
                        rules={[{ 
                            required: true,
                            message: 'Please select your country region' 
                        }]}
                        >
                        <div className='dropDowninput'>
                            <div className='title'>
                                {t('Register.country_region')}
                            </div>
                            <Select placeholder={t('Register.country_region')}>
                                <Option value="0">Taiwan</Option>
                                <Option value="1">美國</Option>
                            </Select>
                        </div>
                        <div className='heightBlock'/>
                        <div className='flexForm'>
                        <Form.Item
                        name="state_district"
                        rules={[{ 
                            required: true,
                            message: 'Please input your state district' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.state_district')}/>
                        </Form.Item>
                        <div className='block'/>
                        <Form.Item
                        name="city"
                        rules={[{ 
                            required: true,
                            message: 'Please input your city' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.city')}/>
                        </Form.Item>
                    </div>
                    <div className='flexForm'>
                        <Form.Item
                        name="postal_code"
                        rules={[{ 
                            required: true,
                            message: 'Please input your postal code' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.postal_code')}/>
                        </Form.Item>
                        <div className='block'/>
                        <Form.Item
                        name="address"
                        rules={[{ 
                            required: true,
                            message: 'Please input your address' 
                        }]}
                        >
                            <Input size='large' prefix={t('Register.address')}/>
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
                    </Form.Item>
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterCompany)
/* eslint-disable */
import React, { useEffect } from 'react'
import 'antd/dist/antd.css'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
// import { history } from 'redux/store';
import { Layout, Menu, Row, Col, Select, Dropdown } from 'antd';
import userIconImage from 'images/icon-memberwhite.svg'

const { Header } = Layout
const { Option } = Select

// React Function Component Es6寫法
const PageHeader = (props, { component: Component, store, ...rest }) => {

  const { i18n, t } = useTranslation()

  useEffect(()=>{
    if(sessionStorage.getItem('lang') === null){
      sessionStorage.setItem('lang','tw')
    } else {
      i18n.changeLanguage(sessionStorage.getItem('lang'))
    }
  }, [])

  // redux use selector
  // const loginInfo = useSelector(state => state.LoginInfo)
  // redux store => LoginInfo的資料

  const LoginInfo = JSON.parse(localStorage.getItem('LoginInfo'))

  // i18n.changeLanguage(sessionStorage.getItem('lang'))

  const handleLangChange = value => {
    if (value && value !== null) {
      sessionStorage.setItem('lang',value)
      i18n.changeLanguage(value)
    }
  }

  const handleLogout = () => {
    localStorage.clear()
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          會員中心
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          我的帳戶
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          訂閱清單
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          客服中心
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4" >
        <Link to='/auth/login' onClick={handleLogout}>登出</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className='headerlayout'>
      <Header style = {{ position:'fixed', zIndex: 1, width: '100%' }}>
        <Row justify='space-between'>
          <Col span={12}>
          <div className='logo'>
             App Market
          </div>
          </Col>
          <Col span={6}>
            <Row justify='end' align='middle'>
              <Col span={6}>
                <Row justify='center'>
                  <Col>
                    <div style={{ color: '#000000', display: 'flex' }}>
                      <span style={{ fontSize: 11 }}>{ LoginInfo ? `${LoginInfo.userName}`  : ''}</span>
                      {/* <span style={{ fontSize: 10, paddingLeft: 10 }}>{ LoginInfo ? LoginInfo.account : ''}</span>  */}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={6}>
              <Select defaultValue={sessionStorage.getItem('lang')?sessionStorage.getItem('lang'):'tw'} style={{ width: 120, right:100 }} onChange={handleLangChange}>
                  {/* onChange={handleChange} */}
                  <Option value='tw'>繁體中文</Option>
                  <Option value='en'>English</Option>
              </Select>
              </Col>
              <Col span={12}>
                {
                  LoginInfo === null ?
                  <><Link style={{ color: '#82C200', paddingRight: 20, fontWeight: 'bold' }} to='/auth/login'>{t('Header.login')}</Link><span className="navbar__link-separator">|</span><Link style={{ color: '#7C7C7C', paddingLeft: 20, fontWeight: 'bold' }} to='/Register/Agreement'>{t('Header.sign_up')}</Link></> :
                  <>
                  <Row>
                  <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      {LoginInfo.userName}
                        {
                          LoginInfo.profilePhoto?
                          <div className='headerprofile'>
                          <img className='user' alt='user icon' src={userIconImage}></img>
                        </div>:
                          <div className='headerprofile'>
                            <img className='user' alt='user icon' src={userIconImage}></img>
                          </div>
                        }
                    </a>
                  </Dropdown>
                  
                    </Row>
                  </>
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    </Layout>
    )
  }

export default (PageHeader)

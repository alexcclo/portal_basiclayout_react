/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import 'antd/dist/antd.css'
import { Menu, Row, Col } from 'antd';
import { UserOutlined, DatabaseFilled, DollarOutlined, CreditCardOutlined, TagOutlined, StarOutlined, BellOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import * as actionCreators from '../redux/actions'
import userIconImage from 'images/icon-member.svg'
import { clearLoginInfo } from 'redux/auth'

const { SubMenu } = Menu;
// class for react extra component

const HomePageSideMenu = (props) => {
  const [current, setCurrent] = useState('1')
  const LoginInfo = JSON.parse(localStorage.getItem('LoginInfo'))
  // i18n language switch
  const { t } = useTranslation()
  // const { GlobalSetting } = props.GlobalSetting
   
  // Click action control
  const handleClick = e => {
    setCurrent(e.key)
  }
  
  return (
    <>
    <div className='menulayout'>
        <Menu
          theme='dark'
          onClick={handleClick}
          style={{ width: '100%', height: '100vh', marginTop: 64 }}
          defaultOpenKeys={['resource']}
          defaultSelectedKeys={['resource']}
          selectedKeys={[current]}
          mode='inline'
        >
          <div className='block'></div>
          <div className='profile'>
            <Row style={{ padding: '30px 10px' }}>
              <Col span={8}>
                
                <div className='image'>
                  {
                    LoginInfo.profilePhoto?
                    <img className='user' alt='user icon' src={userIconImage}></img>:
                    <img className='user' alt='user icon' src={userIconImage}></img>
                  }
                </div>
              </Col>
              <Col span={16} style={{ padding: '36px 10px' }}>
                {
                LoginInfo !== null ?
                <p className='accountName'>{LoginInfo.userName}</p>:
                <p className='accountName'>NULL</p>
                }
              </Col>
            </Row>
          </div>
          <SubMenu key='myAccount' icon={<UserOutlined />} title={t('Menu.my_account')}>
            <Menu.Item style={{ paddingLeft:80 }} key='basic'>
              <Link to='/portal/account/basic'>{t('Menu.profile')}</Link>
            </Menu.Item>
            <Menu.Item style={{ paddingLeft:80 }} key='setting'>
              <Link to='/portal/account/setting'>{t('Menu.manage_users')}</Link>
            </Menu.Item>
            <Menu.Item style={{ paddingLeft:80 }} key='password'>
              <Link to='/portal/account/password'>{t('Menu.change_password')}</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item style={{ paddingLeft:55 }} icon={<DatabaseFilled />} key='service'>
            <Link to='/portal/service'>{t('Menu.subscriptions')}</Link>
          </Menu.Item>
          <Menu.Item style={{ paddingLeft:55 }} icon={<DollarOutlined/>} key='point'>
            <Link to='/portal/point'>{t('Menu.stored_points')}</Link>
          </Menu.Item>
          <Menu.Item style={{ paddingLeft:55 }} icon={<CreditCardOutlined />} key='cost'>
            <Link to='/portal/cost'>{t('Menu.billing')}</Link>
          </Menu.Item>
          <Menu.Item style={{ paddingLeft:55 }} icon={<TagOutlined />} key='ticket'>
            <Link to='/portal/ticket'>{t('Menu.vouchers')}</Link>
          </Menu.Item>
          <Menu.Item style={{ paddingLeft:55 }} icon={<StarOutlined />} key='reply'>
            <Link to='/portal/reply'>{t('Menu.my_reviews')}</Link>
          </Menu.Item>
          <Menu.Item style={{ paddingLeft:55 }} icon={<BellOutlined />} key='notice'>
            <Link to='/portal/notice'>{t('Menu.notifications')}</Link>
          </Menu.Item>
        </Menu>
      </div>
    </>
  )
}

// store items in props
// redux store state default
const mapStatetoProps = (store) => (
  { LoginInfo: store.LoginInfo }
)

const mapDispatchToProps = dispatch => {
  return {
    clearLoginInfo: () => {
      dispatch(clearLoginInfo())
    }
  }
}

// const mapStateToProps = store => (
//   { GlobalSetting: store.GlobalSetting }
// )
// Connect Redux store
// Store state in props
// actionCreators put actions in props
// using mapDispacthToProps
export default connect(mapStatetoProps,mapDispatchToProps,'', actionCreators)(HomePageSideMenu)

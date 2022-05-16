/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table, Popconfirm, Divider, Layout, Select  } from 'antd';
import moment from 'moment';
import EditUser from './EditUser';
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { saveLoginInfo, clearLoginInfo } from '../redux/auth'
import { fetchUser, tenantFilter } from '../redux/users'
import AddUser from './AddUser';

const { Content } = Layout
const { Option } = Select;

class AdminUserTable extends React.Component{
      // react 基本資料 只在這個component中可以存取
  constructor (props) {
    super(props)
    this.state = {
      btnRights: {
        view: true,
        freeze: true,
        delete: true,
        edit: true,
        add: true,
      }, // 按鈕權限的數组
    };
  }
  componentDidMount(){
    //抓取用戶資料
    this.props.fetchUser()
  }
//將該欄位的資訊傳入編輯Modal
  handleUserInfo(e){
      return(
        <EditUser
        resEmail= {e}
        />
      )
  }
  
//處理角色變更
  handleUserChange = (value) => {
    this.props.saveLoginInfo({...this.props.LoginInfo, userType: parseInt(value) })
    
  }
//處理tenant變更
  handleTenantChange = (value) => {
    //抓取user
    this.props.fetchUser()
    //如果有選擇過濾，則呼叫過濾action
    if (value !== "0"){
      this.props.tenantFilter(value)
    }
  }
  
  render(){
//轉換語系
    const { t } = this.props
//控制Table欄位
    const columns = [
        {
          title: `${t('User.Name')}`,
          dataIndex: 'userName',
          key: 'userName',
          width: '15%',
        },
        {
          title: `${t('User.Email')}`,
          dataIndex: 'Email',
          key: 'Email',
          width: '20%',
        },
        {
          title: `${t('User.CompanyName')}`,
          dataIndex: 'CompanyName',
          key: 'CompanyName',
          width: '10%',
        },
        {
          title: `${t('User.CreateDate')}`,
          dataIndex: 'CreateDate',
          key: 'CreateDate',
          width: '15%',
            render: (text, record, index) => {
              // return text
              return moment(text).format("YYYY/MM/DD HH:mm:ss");
            },
        },
  
        {
          title: `${t('User.Status')}`,
          dataIndex: 'Status',
          key: 'Status',
          width: '10%',
        },
        {
          title: `${t('User.UserType')}`,
          dataIndex: 'Usertype',
          key: 'Usertype',
          width: '10%',
          render:()=>{
            return `${t('UserType.PortalAdmin')}`
          }
        },
        {
          title: `${t('User.Options')}`,
          key: 'Options',
          width:'10%',
          render: (text, record, index) => {
            const { btnRights } = this.state;
            return (
              <span>
                {btnRights.view ? (
                  <span>
                    <EditUser res = {record} />
                  </span>
                ) : null}
                <span/>
                <Divider type='vertical'/>
                <Popconfirm title = {t('btn.Delete')} placement="left" >
                  <a> {t('btn.Delete')} </a>
                </Popconfirm>
              </span>
            );
          },
        },
      ];
      
  
    return(
      <>
        <Divider style={ {margin:'20px 0'} } />
        <Layout>
            <Content style={{ padding:'0 20px' }}>
              <AddUser/>
              <Select defaultValue={"0"} style={{ width: 200 }} onChange={this.handleTenantChange}>
                <Option value="0">{t('Filter.All')}</Option>
                <Option value="1"></Option>
                <Option value="2">wistron</Option>
              </Select>
              <Select defaultValue={this.props.LoginInfo.userType.toString()} style={{ width: 200 }} onChange={this.handleUserChange}>
                <Option value="1">Portal Admin</Option>
                <Option value="2">ISV Admin</Option>
                <Option value="3">ISV</Option>
                <Option value="4">User Admin</Option>
                <Option value="5">User</Option>
              </Select>
              <Table columns = {columns} dataSource = {this.props.users} style={ {padding:'20px 0px'} }/>
            </Content>
        </Layout>
      </>
    )
  }
}
//redux傳入user資訊跟user列表
const mapStateToProps = store => (
  { LoginInfo: store.LoginInfo,
    users: store.Users.users
  }
)
//redux傳入action
const mapDispatchToProps = dispatch => {
  return {
    saveLoginInfo: (payload) => {
      dispatch(saveLoginInfo(payload))
    },
    clearLoginInfo: () => {
      dispatch(clearLoginInfo())
    },
    fetchUser : () => {
      dispatch(fetchUser())
    },
    tenantFilter : tenantId => {
      dispatch(tenantFilter(tenantId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(AdminUserTable))
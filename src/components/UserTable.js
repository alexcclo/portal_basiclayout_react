/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table, Popconfirm, Divider, Layout } from 'antd';
import moment from 'moment';
import EditUser from './EditUser';
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import * as actionCreators from '../redux/actions'

const { Content } = Layout

class UserTable extends React.Component{
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

//將該欄位的資訊傳入編輯Modal
  handleUserInfo(e){
      return(
        <EditUser
        resEmail= {e}
        />
      )
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
    
      //資料來源
      const data = [
      {
        key: '1',
        userName: 'Royce.Wang',
        Email: 'royce.wang@.com',
        CompanyName: 'wistron',
        CreateDate: '2021-07-15T07:18:30.2694673',
        Status: '啟用中',
      },
      {
        key: '2',
        userName: 'Ray.Wu',
        Email: 'Ray.Wu@.com',
        CompanyName: '',
        CreateDate: '2021-07-15T07:18:30.2694673',
        Status: '啟用中',
      },
    ];
    return(
      <>
        <Divider style={ {margin:'20px 0'} } />
        <Layout>
            <Content style={{ padding:'0 20px' }}>
              <Table columns = {columns} dataSource = {data} />
            </Content>
        </Layout>
      </>
    )
  }
}
export default connect('', actionCreators)(withTranslation()(UserTable))
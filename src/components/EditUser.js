/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Drawer, Form, Input, Space, Button} from 'antd';
import { withTranslation } from 'react-i18next'
import * as actionCreators from '../redux/actions'
import { connect } from 'react-redux';
import moment from 'moment'
class EditUser extends React.Component{
constructor (props) {
    super(props)
    this.state = {
        visible: false,
    };
  }
  // componentDidMount(){
  // }

//轉換時間格式
  TimeFormat(e){
    return moment(e).format("YYYY/MM/DD HH:mm:ss");
  }

//顯示編輯Modal
  showDrawer = () => {
    this.setState( { visible: true } )
  };

//顯示編輯Modal
  onClose = () => {
    this.setState( { visible: false } )
  };

  render(){
//轉換語系
    const { t } = this.props
    return (
        <>
        <a onClick={this.showDrawer}>
           {t('btn.Edit')}
        </a>
        <Drawer 
            title= {t('btn.Edit')} 
            width = {500}
            placement ="right" 
            onClose = { this.onClose } 
            visible = { this.state.visible }
            extra = {
                <Space>
                <Button onClick={this.onClose}>{t('btn.Cancel')}</Button>
                <Button onClick={this.onClose} type="primary">
                  {t('btn.Confirm')}
                </Button>
              </Space>
            }
            >
                <Form
                    name="basic"
                    labelCol={ {span:6} }
                    wrapperCol={ {span:18} }
                >
                    <Form.Item
                        label = {t('User.Name')}
                        name = "名稱"
                    >
                        <Input defaultValue={this.props.res.userName} />
                    </Form.Item>
                    <Form.Item
                        label = {t('User.Email')}
                        name = "信箱"
                    >
                        <Input defaultValue={this.props.res.Email} />
                    </Form.Item>
                    <Form.Item
                        label = {t('User.CompanyName')}
                        name = "公司名稱"
                    >
                        {this.props.res.CompanyName}
                    </Form.Item>
                    <Form.Item
                        label = {t('User.CreateDate')}
                        name = "創建時間"
                    >
                        { this.TimeFormat(this.props.res.CreateDate) }
                    </Form.Item>
            </Form>
        </Drawer>
        </>
    );
  }
};
export default connect('',actionCreators)(withTranslation()(EditUser))
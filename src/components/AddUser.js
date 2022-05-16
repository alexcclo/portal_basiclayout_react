/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Drawer, Form, Input, Space, Button} from 'antd';
import { withTranslation } from 'react-i18next'
import * as actionCreators from '../redux/actions'
import { connect } from 'react-redux';

class AddUser extends React.Component{
constructor (props) {
    super(props)
    this.state = {
        visible: false,
    };
  }
  componentDidMount(){
  }

//顯示編輯Modal
  showDrawer = () => {
    this.setState( { visible: true } )
  };

//關閉編輯Modal
  onClose = () => {
    this.setState( { visible: false } )
  };

  render(){
    const { t } = this.props
    return (
        <>
            <Button 
            type = 'primary' 
            style = { {padding:'0 15px'} }
            onClick = { this.showDrawer }
            >
                {t('btn.AddUser')}
            </Button>
        <Drawer 
            title= {t('btn.AddUser')} 
            width = {500}
            placement ="right" 
            onClose = { this.onClose } 
            visible = { this.state.visible }
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
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label = {t('User.Email')}
                        name = "信箱"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label = {t('User.CompanyName')}
                        name = "公司名稱"
                    >
                        <Input />
                    </Form.Item>
            </Form>
            <Space>
                <Button onClick={this.onClose} type="primary">
                  {t('btn.Confirm')}
                </Button>
                <Button onClick={this.onClose}>{t('btn.Cancel')}</Button>
              </Space>
        </Drawer>
        </>
    );
  }
};
export default connect('',actionCreators)(withTranslation()(AddUser))
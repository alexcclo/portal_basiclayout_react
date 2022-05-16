/* eslint-disable no-unused-vars */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from 'pages/404'
import { Layout, Row, Col } from "antd";
import PageHeader from "components/PageHeader";
import SideMenu from "components/SideMenu";
import AdminUser from "pages/AdminUser";

import Resources from "pages/Resources";
import Service from "pages/Service";
import Login from "pages/Login";

import Forget from "pages/Forget";
import AccountRecovery from "pages/AccountRecovery";
import RegisterAgreement from "pages/RegisterAgreement";
import PrivacyAgreement from "pages/PrivacyAgreement";
import RegisterAccount from "pages/RegisterAccount";
import RegisterCompany from "pages/RegisterCompany";
import RegisterMember from "pages/RegisterMember";
import RegisterSuccess from "pages/RegisterSuccess";

import marketdetail from "pages/marketdetail";

import AccountBasic from "pages/AccountBasic";
import AccountSetting from "pages/AccountSetting";
import Password from "pages/Password";
import Point from "pages/Point";
import Cost from "pages/Cost";
import CostDetail from "pages/CostDetail";
import Ticket from "pages/Ticket";
import Reply from "pages/Reply";
import Notice from "pages/Notice";
import ServiceDetail from "pages/ServiceDetail";




// auth驗證頁面部分
function AuthLayout() {
  return (
    <div>
      <Route path="/auth/login" exact component={Login} />
      <Redirect from="/auth" to="/auth/login" exact />
      <Route />
    </div>
  );
}

// 主體頁面部分
const Portal = (store) => {
  return (
    <div>
      <PageHeader/>
      <Layout>
          <Row justify="center">
            <Col span={4}>
              <SideMenu />
            </Col>
            <Col span={20} style={{ overflowY: 'auto', height:'100vh' }}>
              <Route path='/portal/account/basic' component={AccountBasic}/>
              <Route path='/portal/account/setting' component={AccountSetting}/>
              <Route path='/portal/account/password' component={Password}/>
              <Route path='/portal/service' exact component={Service} />
              <Route path='/portal/service/Detail' exact component={ServiceDetail} />
              <Route path='/portal/point' exact component={Point} />
              <Route path='/portal/cost' exact component={Cost} />
              <Route path='/portal/cost/Detail' exact component={CostDetail} />
              <Route path='/portal/ticket' exact component={Ticket} />
              <Route path='/portal/reply' exact component={Reply} />
              <Route path='/portal/notice' exact component={Notice} />
              {/* <Route path='/portal/resources' exact component={Resources}/> */}
              {/* <Redirect from="/portal" to="/portal/service" exact /> */}
              {/* <Redirect from="/portal/service/Detail" to="/portal/service" exact /> */}
              <Route />
            </Col>
          </Row>
      </Layout>
    </div>   
  )
}

// redirect 路徑 => 若沒有登入則轉至登入畫面
const GuardedRoute = ({ component: Component, store, ...rest }) => (
  <Route {...rest} render={(props) => (
      // store.getState().LoginInfo.isAuthenticated === true
      JSON.parse(localStorage.getItem('LoginInfo')) !== null
          ? <Component {...props} />
          : <Redirect to='/auth/login' />
  )} />
)

// 主體架構 => 將auth頁面與主體頁面分開
function Layouts(store) {
  return (
    <Switch>
      <Route path="/auth" component={AuthLayout} />
      <Route path="/forgetpassword" component={Forget} />
      <Route path="/AccountRecovery" component={AccountRecovery} />
      <Route path="/Register/Agreement" component={RegisterAgreement} />
      <Route path="/Register/Privacy" component={PrivacyAgreement} />
      <Route path="/Register/Account" component={RegisterAccount} />
      <Route path="/Register/Company" component={RegisterCompany} />
      <Route path="/Register/Member" component={RegisterMember} />
      <Route path="/Register/Success" component={RegisterSuccess} />
      <Route path="/market/detail" component={marketdetail} />
      <GuardedRoute component={Portal} store={store}/>
      <Route exact path="/">
        <Redirect to="/auth/login" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function RouterSetting(store) {
  return (
    <Layouts {...store}/>
  )
}

export default (RouterSetting)

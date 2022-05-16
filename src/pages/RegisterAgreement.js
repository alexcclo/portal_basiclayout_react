/* eslint-disable */
import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { connect, useDispatch } from 'react-redux'
import { useMsal, useIsAuthenticated } from "@azure/msal-react"
import { loginRequest } from "../authConfig"
import { Button, Layout, Row, Col } from 'antd'
import { WindowsOutlined, GoogleOutlined, AmazonCircleFilled } from '@ant-design/icons'
import { saveLoginInfo, clearLoginInfo } from '../redux/auth'
import { history } from 'redux/store'
import { Form, Input, Checkbox } from 'antd';
import { Image } from 'antd';
import PageHeader from "components/PageHeader";
import { Typography } from 'antd';
import logoImage from 'images/login_left.png'
import { login } from 'api/hub'
import { get_landingpage } from 'api/hub'
import { Breadcrumb } from 'antd';
import { message, Space } from 'antd';
// import { useHistory } from 'react-router-dom'
const { Title } = Typography;
const RegisterAgreement = (props) => {
  const { instance } = useMsal()
  const dispatch = useDispatch()
  // const history = useHistory()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [loginLoadingStatus, setLoginLoadingStatus] = useState(false)
  const onFinish = (values) => {
    message.success({
      content:"Email已送出請至信箱收取信件更新密碼",
      className:"popupmessage"
    }
      );
    history.push('/forgetpassword')
    }
const handleAgree = () => {
    history.push('/Register/Privacy')
}
  useEffect(() => {
    console.log(props.LoginInfo)
    // handleLogin()
  } )
  const { Header, Footer, Sider, Content } = Layout;
  //登入function(MSAL)
  function handleLogin(values) {
    setLoginLoadingStatus(() => true)
    dispatch(login(values))
    .then(resp => {
      props.saveLoginInfo({
        accessToken: resp.accessToken,
        loginType: 'MS',
        tenantId: resp.tenantId,
        userName: resp.account.name,
        account: resp.account.username,
        isAuthenticated: true,
        userType: 1
      })
      sessionStorage['accessToken'] = resp.accessToken
      setLoginLoadingStatus(() => false)
      history.push('/portal')
    })
    .catch(e => {
        setLoginLoadingStatus(() => false)
        console.error(e)
    })
  }
  //登出function(MSAL)
  function handleLogout(instance) {
    instance.logoutPopup()
    .then(() => {
      props.clearLoginInfo()
    })
    .catch(e => {
        console.error(e);
    });
  }
  return (
    <>
      <Header>
        <PageHeader/>
      </Header>
      <Content style={{ padding: '0 50px' }}>
          <div className='middletitle'>
              Register
          </div>
        <div className="agreelayout">
            <div className='title'>
              會員使用條款
            </div>
            <div class="textEditor">
                <p>
                    <span>本網站之隱私權政策使用條款(以下簡稱「本條款」)適用於緯謙股份有限公司(以下簡稱「本公司」)在本網站提供的所有產品與服務(以下簡稱「產品/服務」)，當您使用本網站產品/服務時，即代表您接受本條款。於本公司判斷有必要時，得在不事先通知用戶的情形下隨時變更本條款。變更後的本條款自公布在本公司經營網站內的適當處時起生效。如用戶於本條款變更後仍繼續使用產品/服務，將視為用戶已同意變更後的本條款。由於本公司不會個別通知用戶相關變更內容。</span>
                </p>
                <strong>一、適用範圍</strong>
                <p>本隱私權政策僅適用於本站，至於本站所提及之他方網站，或所提供之他方網站連結，僅在讓使用者便利使用或方便參考，不在本政策之適用範圍。</p>
                <strong>二、資料蒐集之目的</strong>
                <p>當您申請本站帳號及進行購物時，我們將會蒐集您的個人相關資訊，例如您的姓名、性別、e-mail、出生年月日、身分證字號、公司、職務等資料，以讓我們能夠辨識您的身份，進而讓您能購買或使用本站相關商品或服務。當您進行購物時，我們收集處理您的付款操作所必須的資料，例如您支付工具號碼(信用卡號)，以及與您的支付工具相關的安全碼當您向本站提出問題或意見時，本站會蒐集您所反映的內容及相關資訊，以做為與您聯繫和改進本站服務的參考。 本站也會蒐集您所使用裝置和瀏覽器上的資料，包括IP位址、瀏覽器類型、作業系統、cookie及您瀏覽的網頁紀錄等，相關資料僅會用來提供您更適性化的服務，並改善本站系統的效能與體驗</p>
                <strong>三、資料蒐集之目的</strong>
                <p>當您申請本站帳號及進行購物時，我們將會蒐集您的個人相關資訊，例如您的姓名、性別、e-mail、出生年月日、身分證字號、公司、職務等資料，以讓我們能夠辨識您的身份，進而讓您能購買或使用本站相關商品或服務。當您進行購物時，我們收集處理您的付款操作所必須的資料，例如您支付工具號碼(信用卡號)，以及與您的支付工具相關的安全碼當您向本站提出問題或意見時，本站會蒐集您所反映的內容及相關資訊，以做為與您聯繫和改進本站服務的參考。 本站也會蒐集您所使用裝置和瀏覽器上的資料，包括IP位址、瀏覽器類型、作業系統、cookie及您瀏覽的網頁紀錄等，相關資料僅會用來提供您更適性化的服務，並改善本站系統的效能與體驗</p>
            </div>
        </div>
        <div>
            <div className="wibtnagree">
                <Button type="primary" htmlType="submit" onClick={handleAgree}>我已知悉並同意 會員使用條款</Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterAgreement)
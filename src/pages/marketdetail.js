/* eslint-disable */
import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { Menu, Layout, Input, Breadcrumb, Radio } from 'antd'
import { saveLoginInfo, clearLoginInfo } from '../redux/auth'
import { SearchOutlined } from '@ant-design/icons';
import ServiceCard from 'components/ServiceCard'
import { history } from 'redux/store'
import { storageData, clearstorageData } from 'redux/storage'
import { Col, Row } from 'antd'
import { Carousel } from 'antd';
import PageHeader from "components/PageHeader";
import { useTranslation } from 'react-i18next'
import displayimg from 'images/Marketdisplay.png'

const marketdetail = (props) => {
  console.log(props)
  const { t } = useTranslation()
  const default_service = {
    service_media:"0000",
    service_name: "MusesAI Video",
    vendor_name: "Servtech",
    period_start: "2022-05-13",
    period_end: "2022-05-11",
    tag: "API",
    rate: 5,
    reviews: 236,
    summary: "MusesAI is an AI tool specialize in smart manufacturing. Using factory process image data combined with a one-stop AI model development platform, the system interface..."
}
  const Service = props.storeData === null ? default_service : props.storeData.data.service

  const options = [
    { label: `${t('Subscription.Detail.overview')}`, value: '1' },
    { label: `${t('Subscription.Detail.pricing')}`, value: '2' },
    { label: `${t('Subscription.Detail.details_and_support')}`, value: '3' },
    { label: `${t('Subscription.Detail.ratings_and_reviews')}`, value: '4' , disabled: true}
  ]

  const onChange = e => {
    console.log(e);
  }

  const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '280px',
    textAlign: 'center',
    background: '#C7C7C7',
  };
  
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <>
    <Header>
        <PageHeader/>
      </Header>
      <Content>
        <div className='wrapM'>
       <div className='innerlayoutM'>
          <Breadcrumb separator=">">
            <Breadcrumb.Item> App Market</Breadcrumb.Item>
            <Breadcrumb.Item className='lastchild'>{`${default_service.service_name}`}</Breadcrumb.Item>
          </Breadcrumb>
          <div className='headtitle'>
            {`${default_service.service_name}`}
          </div>
          <ServiceCard data={default_service} type='market'></ServiceCard>
          <div className='servicedetailradio'>
            <Radio.Group 
                defaultValue="1"
                optionType="button"
                buttonStyle="solid"
                options={options}
                onChange={onChange} 
                />
          </div>
          <div className='servicedescription'>
            <div className='left'>
              <div className='title'>
                {t('Subscription.Detail.product_overview')}
              </div>
              <div className='par'>
              As a manager, have you ever had the following feelings? <br/><br/>
              Even if the detailed operating procedures have been established, the product quality does not meet expectations? The assembly line does not have data collection equipment. <br/>
              How can I immediately know whether the employees are following the operating procedures? What is the solution to avoid mistakes on a production line with high repetitive motion?<br/><br/>
At this time, the above problems can be solved if there is continuous and uninterrupted real-time control of AI intelligent assistants.
MusesAI image analysis can do it for you:<br/><br/>
1. Manufacture and assembly line: Check the production line process and the calculation of each production line process hours according to the factory SOP.<br/>
2. Object identification of processing line personnel: Check the working equipment of the staff in the factory area according to the industrial safety SOP.<br/><br/>
The AI image recognition technology with zero-contact and non-sensing acquisition help you maintain the quality of the production line and supervise the SOP process of the production line operators. MusesAI also allows you to better understand the production progress of each link of the production line, and also allows your employees to be more focused and clear about the work process when they are on duty. To reduce defective products, continue to produce high-quality products!
              </div>
              
            </div>
            <div className='right'>
              <div className='title'>
                {t('Subscription.Detail.preview')}
              </div>
                <div className='carousel'>
                  {/* <Carousel autoplay>
                    <div>
                      
                    </div>
                  </Carousel> */}
                  <img className='displayImg' alt='display' src={displayimg} ></img>
                </div>
                <div className='title'>
                    {t('Subscription.Detail.pricing')}
                </div>
                <div className='cost'>
                  <div className='costinfo'>
                    NT 5,000 per 1 Mpoint
                  </div>
                </div>
                <div className='sup'>
                  <div className='title'>
                    {t('Subscription.Detail.details_and_support')}
                  </div>
                  <div className='supblock'>
                    <div className='marginblock'>
                      <div className='block'>
                        <div className='left'>
                          支持
                        </div>
                        <div className='right'>
                          http://wiki.lifeupapp.fun/zh-cn/#/introduction/privacy-trems
                        </div>
                      </div>
                      <div className='block'>
                        <div className='left'>
                          客服信箱
                        </div>
                        <div className='right'>
                          service@email.com
                        </div>
                      </div>
                      <div className='block'>
                        <div className='left'>
                          隱私權政策
                        </div>
                        <div className='right'>
                          https://wiki.lifeupapp.fun/zh-cn/#/introduction/privacy-trems
                        </div>
                      </div>
                      <div className='block'>
                        <div className='left'>
                          服務合約
                        </div>
                        <div className='rightg'>
                          1990年1月1日
                        </div>
                      </div>
                      <div className='block'>
                        <div className='left'>
                          發佈日期
                        </div>
                        <div className='rightg'>
                          2022年4月5日
                        </div>
                      </div>
                      <div className='block'>
                        <div className='left'>
                        版權
                        </div>
                        <div className='right'>
                        https://wiki.lifeupapp.fun/
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
      </div>
      </Content>
    </>
  )
}
// 將store中的items值傳綁到props上
const mapStateToProps = store => (
  { storeData: store.storeData }
)
const mapDispatchToProps = dispatch => {
  return {
    storageData: (payload) => {
      dispatch(storageData(payload))
    },
    clearstorageData: () => {
      dispatch(clearstorageData())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(marketdetail)
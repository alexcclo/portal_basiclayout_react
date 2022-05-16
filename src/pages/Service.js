/* eslint-disable */
import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { Menu, Input, Breadcrumb, Radio } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import ServiceCard from 'components/ServiceCard'
import { storageData, clearstorageData } from 'redux/storage'
import { useTranslation } from 'react-i18next'

const Service = (props) => {
  // Basic Setting
  // i18n language switch
  const { t } = useTranslation()
  // Search Component
  const { Search } = Input
  // Radio Data
  const options = [
    { label: `${t('Subscription.all')}`, value: '1' },
    // { label: `${t('Subscription.applying')}`, value: '2', disabled: true },
    // { label: `${t('Subscription.quoted')}`, value: '3', disabled: true },
    // { label: `${t('Subscription.pending_payment')}`, value: '4', disabled: true },
    // { label: `${t('Subscription.paid')}`, value: '5', disabled: true },
    { label: `${t('Subscription.activated')}`, value: '6' },
    // { label: `${t('Subscription.terminated')}`, value: '7', disabled: true },
    // { label: `${t('Subscription.cancelled')}`, value: '8', disabled: true },
  ]
  // Radio Function
  const onChange = e => {
    console.log(e);
  }
  // Mock Data
  const data = [
    {
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
    // ,
    // {
    //   service_media:"0000",
    //   service_name: "Miner AI Data Solution Platform",
    //   vendor_name: "Eazy A",
    //   period_start: "2022-03-01",
    //   period_end: "2022-03-31",
    //   tag: "軟體型服務(SaaS與API)",
    //   rate: 4.5,
    //   reviews: 236,
    //   summary: "透過OCR 與 語意分析演算法，自動擷取客戶訂單資訊，並藉由流程機器人將相關數據寫入ERP 系統，省去人員滕打時間與錯誤機會。"
    // },
    // {
    //   service_media:"0000",
    //   service_name: "LifeUp Gmeify To Do List",
    //   vendor_name: "LifeUp",
    //   period_start: "2022-03-10",
    //   period_end: "2022-04-10",
    //   tag: "軟硬體型服務(SaaS與API)",
    //   rate: 3,
    //   reviews: 600,
    //   summary: "人升是一款融合了遊戲化激勵元素的待辦事項、習慣養成應用，可以當作是簡約版的地球OL。"
    // }
  ]
  
  return (
    <>
       <div className='innerlayout'>
          <Breadcrumb separator=">">
            <Breadcrumb.Item> App Market</Breadcrumb.Item>
            <Breadcrumb.Item >{t('Global.member_center')}</Breadcrumb.Item>
            <Breadcrumb.Item className='lastchild'>{t('Menu.subscriptions')}</Breadcrumb.Item>
          </Breadcrumb>
          <div className='headtitle'>
            {t('Menu.subscriptions')}
          </div>
          <Radio.Group 
            defaultValue="1"
            optionType="button"
            buttonStyle="solid"
            options={options}
            onChange={onChange} 
            />
          <div className='searchbar'>
            <div className='mid'>
              <Search
                //onSearch={}
                enterButton={t('Subscription.search')}
                allowClear
                size="large"
                placeholder={t('Subscription.search_your_subscription')}
                prefix={<SearchOutlined className="site-form-item-icon" />}
              />
            </div>
          </div>
          <div className='scroll'>
          {
            data.map(item => {
              return <ServiceCard data={item} type='list'></ServiceCard>
            })
          }
          </div>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Service)
/* eslint-disable */
import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { Breadcrumb, Radio, Carousel } from 'antd'
import ServiceCard from 'components/ServiceCard'
import { storageData, clearstorageData } from 'redux/storage'
import { useTranslation } from 'react-i18next'

const ServiceDetail = (props) => {
  // i18n language switch
  const { t } = useTranslation()

  console.log(props)
  const default_service = {
    service_media:"0000",
    service_name: "Miner AI Data Solution Platform",
    vendor_name: "Eazy A",
    period_start: "2022-03-01",
    period_end: "2022-03-31",
    tag: "軟體型服務(SaaS與API)",
    rate: 4.5,
    reviews: 236,
    summary: "透過OCR 與 語意分析演算法，自動擷取客戶訂單資訊，並藉由流程機器人將相關數據寫入ERP 系統，省去人員滕打時間與錯誤機會。"
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
  
  return (
    <>
       <div className='innerlayout'>
          <Breadcrumb separator=">">
            <Breadcrumb.Item> App Market</Breadcrumb.Item>
            <Breadcrumb.Item >{t('Global.member_center')}</Breadcrumb.Item>
            <Breadcrumb.Item href="/portal/service">{t('Menu.subscriptions')}</Breadcrumb.Item>
            <Breadcrumb.Item className='lastchild'>{`${Service.service_name}`}</Breadcrumb.Item>
          </Breadcrumb>
          <div className='headtitle'>
            {`${Service.service_name}`}
          </div>
          <ServiceCard data={Service} type='detail'></ServiceCard>
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
                ServisBOT 對話式 AI 平台基於 AWS 技術和服務構建，提供了一套工具和服務，使業務用戶和開發人員能夠快速輕鬆地構建或增強所有主要 NLP 平台的聊天機器人，並構建和編排多機器人解決方案，從而改善客戶和跨渠道的員工參與度，如 Amazon Connect、Alexa、消息傳遞、SMS、Web、電子郵件和協作工具（Chime、Teams、Slack）等。
              </div>
              <div className='par'>
              該平台包括與 Amazon Connect（和其他聯絡中心技術）、Lex、Kendra、Comprehend、Sagemaker 和其他 AI 服務的 API 集成，並建立在支持集中式安全、集成和部署的企業級架構之上。
              </div>
              <div className='bpar'>
              機器人構建工具：
              </div>
              <div className='p'>- 可視化流程設計器：使用拖放式低代碼界面管理機器人旅程，以進行基於流程的對話。</div>
              <div className='p'>- 機器人藍圖：解開您帳戶中的藍圖並進行修改以滿足您的業務需求。</div>
              <div className='p'>- ServisBOT Messenger：可以添加到您的網站或移動應用程序的風格化聊天界面。</div>
              <div className='p'>- 後端即服務：安全地訪問您的 API，同時通過無限數量的數據服務豐富機器人。</div>
              <div className='p'>- 人工智能服務：將機器人連接到 NLP、ASR、TTS 等對話和語言服務。</div>
              <div className='p'>-  Bot Insight 工具（提高機器人的準確性和性能）。</div>
              <div className='bpar'>
              優惠包括：
              </div>
              <div className='p'>- 可視化流程設計器：使用拖放式低代碼界面管理機器人旅程，以進行基於流程的對話。</div>
              <div className='p'>- 機器人藍圖：解開您帳戶中的藍圖並進行修改以滿足您的業務需求。</div>
              <div className='p'>- ServisBOT Messenger：可以添加到您的網站或移動應用程序的風格化聊天界面。</div>
              <div className='p'>- 後端即服務：安全地訪問您的 API，同時通過無限數量的數據服務豐富機器人。</div>
              <div className='p'>- 人工智能服務：將機器人連接到 NLP、ASR、TTS 等對話和語言服務。</div>
              <div className='p'>-  Bot Insight 工具（提高機器人的準確性和性能）。</div>
              <div className='par'>
              TensorIoT 為工業和商業客戶提供創新產品、解決方案和諮詢，以通過物聯網、數據和機器學習技術實現商業價值。
              </div>
            </div>
            <div className='right'>
              <div className='title'>
                {t('Subscription.Detail.preview')}
              </div>
                <div className='carousel'>
                  <Carousel autoplay>
                    <div>
                      <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>4</h3>
                    </div>
                  </Carousel>
                </div>
                <div className='title'>
                    {t('Subscription.Detail.pricing')}
                </div>
                <div className='cost'>
                  <div className='costinfo'>
                    NT $900 / 月
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
export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetail)
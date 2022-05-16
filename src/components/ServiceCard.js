/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
// import moment from 'moment';
import { connect } from 'react-redux'
import { Button, message} from 'antd'
import { Rate } from 'antd';
import { CaretDownFilled} from '@ant-design/icons'
import { Space, Menu, Dropdown } from 'antd';
import { history } from 'redux/store'
import { storageData, clearstorageData } from 'redux/storage'
import { withTranslation, useTranslation } from 'react-i18next'
import musesAI from 'images/MusesAI.png'

const ServiceCard = (props) => {
    // i18n language switch
    const [LoadingStatus, setLoadingStatus] = useState(false)
    const { t } = useTranslation()
    const handleservice = () => {
        props.storageData(
            {data:{
                service: props.data,
            }}
          )
        if(props.type === 'list'){
            // service id
            console.log(props)
            history.push('/portal/service/Detail')
        } else {
            history.push('/portal/service')
        }
    }
    const handletoservice = () => {
        setLoadingStatus(() => true)
        setTimeout(() => {
            message.success({
                content:"You have successfully subscribed to the service!",
                className:"popupmessage"
              }
                );
            history.push('/portal/service')
        }, "1500")
    }



    const menu = (
        <Menu>
           <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" onClick={handleservice}>
                {t('Subscription.Card.manage_on_provider')}
            </a>
          </Menu.Item>
          <Menu.Divider/>
          <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="">
              {t('Subscription.Card.authentication_settings')}
            </a>
          </Menu.Item>
          <Menu.Divider/>
          <Menu.Item key="2">
            <a target="_blank" rel="noopener noreferrer" href="">
            {t('Subscription.Card.view_billing_information')}
            </a>
          </Menu.Item>
          <Menu.Divider/>
          <Menu.Item key="3">
            <a target="_blank" rel="noopener noreferrer" href="">
            {t('Subscription.Card.cancel_subscription')}
            </a>
          </Menu.Item>
        </Menu>
      );

    return(
        <>
            <div className='servicelayout'>
                <div className='servicecard'>
                    <div className='marginblock'>
                        <a onClick={handleservice}>
                        <div className='serviceimg'>
                            <img classMame='imgmid' alt='test' src={musesAI} />
                        </div>
                        </a>
                        <div className='serviceinfo'>
                            <div className='servicename'>
                                <div className='title'>
                                    <a color='black' onClick={handleservice}>
                                        {`${props.data.service_name}`}
                                    </a>
                                </div>
                            {    
                            props.type !== 'market'?
                            <div className='status'>
                                <div className='date'>
                                    {`${props.data.period_start} ~ ${props.data.period_end}`}
                                </div>
                                <div className='block'/>
                                <span className="navbar__link">
                                    |
                                </span>
                                <div className='block'/>
                                <div className='state'>
                                    {t('Subscription.Card.activated')}
                                </div>
                            </div>:
                            <></>
                            }
                        </div>
                    <div className='servicedes'>
                        <div className='left'>
                            <div className='servicetag'>
                                <div className='isvname'>
                                    {`${t('Subscription.Card.by')} ${props.data.vendor_name}`}
                                </div>
                                <div className='tag'>
                                    {`#${props.data.tag}`}
                                </div>
                            </div>
                            <div className='servicerole'>
                                <Rate 
                                    allowHalf
                                    disabled defaultValue={props.data.rate} 
                                />
                                <div className='reviews'>
                                    {`${props.data.reviews} Reviews`}
                                </div>
                            </div>
                            <div className='description'>
                                {`${props.data.summary}`}
                            </div>
                        </div>
                        <div className='right'>
                            <div className="button">
                                {/* {
                                props.type === 'list'?
                                <Button type="primary" onClick={handleservice}>
                                    {t('Subscription.Card.go_to_service')}
                                </Button>:
                                <Button type="primary" onClick={handleservice}>
                                    {t('Subscription.Card.return')}
                                </Button>
                                } */}
                                <div className='block'/>
                                {
                                props.type === "market" ?
                                    <Button loading={LoadingStatus} type="primary" onClick={handletoservice}>
                                        <Space>
                                            {t('Subscription.Card.subscribe')}
                                        </Space>
                                    </Button>:
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <Button type="primary">
                                            <Space>
                                                {t('Subscription.Card.actions')}
                                                <CaretDownFilled />
                                            </Space>
                                        </Button>
                                    </Dropdown>
                                }
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
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ServiceCard))
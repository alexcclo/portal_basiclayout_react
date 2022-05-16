/* eslint-disable */
import React from 'react'
import { Breadcrumb, Input, Table, Tag, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next'
import { history } from 'redux/store'

const Cost= () => {
  // Basic Setting
  // i18n language switch
  const { t } = useTranslation()
  // Search Component
  const { Search } = Input
  // OnClick to detail
  const handleonClick = (record) => {
    console.log(record)
    history.push('/portal/cost/Detail')
  }

  // Table Setting
  const columns = [
    {
      title: '訂單日期',
      dataIndex: 'order_date',
      key: 'order_date',
    },
    {
      title: '訂單編號',
      dataIndex: 'order_id',
      key: 'order_id',
    },
    {
      title: '服務名稱',
      dataIndex: 'service_name',
      key: 'service_name',
    },
    {
      title: '服務類型',
      dataIndex: 'service_type',
      key: 'service_type',
    },
    {
      title: '收費模式',
      key: 'billing_type',
      dataIndex: 'billing_type',
    },
    {
      title: '訂單起始日',
      key: 'order_start_date',
      dataIndex: 'order_start_date',
    },
    {
      title: '訂單截止日',
      key: 'order_end_date',
      dataIndex: 'order_end_date',
    },
    {
      title: '訂單金額',
      key: 'order_amount',
      dataIndex: 'order_amount',
    },
    {
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <div className="wibtntable">
            <Button type="primary" onClick={() =>handleonClick(record)}>查看明細 </Button>
          </div>
        </Space>
      ),
    },
  ]

  const data = [
    {
      order_date: '2022-04-04',
      order_id: 'O20220404000548',
      service_name: 'PeakFinder',
      service_type: '軟體型服務',
      billing_type: '訂閱',
      order_start_date: '2022-05-25',
      order_end_date: '2022-06-23',
      order_amount: '$3,400.00'
    },
    {
      order_date: '2022-04-04',
      order_id: 'O20220404000548',
      service_name: 'PeakFinder',
      service_type: '軟體型服務',
      billing_type: '訂閱',
      order_start_date: '2022-05-25',
      order_end_date: '2022-06-23',
      order_amount: '$3,400.00'
    },
    {
      order_date: '2022-04-04',
      order_id: 'O20220404000548',
      service_name: 'PeakFinder',
      service_type: '軟體型服務',
      billing_type: '訂閱',
      order_start_date: '2022-05-25',
      order_end_date: '2022-06-23',
      order_amount: '$3,400.00'
    },
    {
      order_date: '2022-04-04',
      order_id: 'O20220404000548',
      service_name: 'PeakFinder',
      service_type: '軟體型服務',
      billing_type: '訂閱',
      order_start_date: '2022-05-25',
      order_end_date: '2022-06-23',
      order_amount: '$3,400.00'
    }
  ]

  const pagination =  {
    pageSize: 3,
  }

  return(
    <>
      <div className='innerlayout'>
        <Breadcrumb separator=">">
          <Breadcrumb.Item> App Market</Breadcrumb.Item>
          <Breadcrumb.Item href="">{t('Global.member_center')}</Breadcrumb.Item>
          <Breadcrumb.Item href="">{t('Menu.billing')}</Breadcrumb.Item>
        </Breadcrumb>
        <div className='headtitle'>
            {t('Menu.billing')}
        </div>
        <div className='searchbar'>
          <div className='mid'>
            <Search
              //onSearch={}
              enterButton={t('Subscription.search')}
              allowClear
              size="large"
              placeholder='搜尋您的費用'
              prefix={<SearchOutlined className="site-form-item-icon" />}
            />
          </div>
        </div>
        <div className='table'>
          <Table pagination={pagination} columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  )
}
export default Cost
/* eslint-disable */
import React from 'react'
import { Breadcrumb, Input, Table, Tag, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next'

const CostDetail= () => {
  // Basic Setting
  // i18n language switch
  const { t } = useTranslation()
  // Search Component
  const { Search } = Input
  // Table Setting
  const columns = [
    {
      title: '帳單日期',
      dataIndex: 'order_date',
      key: 'order_date',
    },
    {
      title: '帳單編號',
      dataIndex: 'order_id',
      key: 'order_id',
    },
    {
      title: '服務名稱',
      dataIndex: 'service_name',
      key: 'service_name',
    },
    {
      title: '收費模式',
      key: 'billing_type',
      dataIndex: 'billing_type',
    },
    {
      title: '訂閱起始日',
      key: 'order_start_date',
      dataIndex: 'order_start_date',
    },
    {
      title: '訂閱截止日',
      key: 'order_end_date',
      dataIndex: 'order_end_date',
    },
    {
      title: '帳單金額',
      key: 'order_amount',
      dataIndex: 'order_amount',
    },
    {
      title: '帳單裝態',
      key: 'order_status',
      dataIndex: 'order_status',
    }
  ]

  const data = [
    {
      order_date: '2022-04-04',
      order_id: 'O20220404000548',
      service_name: 'PeakFinder',
      billing_type: '訂閱',
      order_start_date: '2022-05-25',
      order_end_date: '2022-06-23',
      order_amount: '$3,400.00',
      order_status: '已付款'
    }
  ]


  return(
    <>
      <div className='innerlayout'>
        <Breadcrumb separator=">">
          <Breadcrumb.Item> App Market</Breadcrumb.Item>
          <Breadcrumb.Item href="">{t('Global.member_center')}</Breadcrumb.Item>
          <Breadcrumb.Item href="">{t('Menu.billing')}</Breadcrumb.Item>
          <Breadcrumb.Item href="">CostDetail</Breadcrumb.Item>
        </Breadcrumb>
        <div className='headtitle'>
            帳單明細
        </div>
        <div className='billtitle'>
          <div className='mid'>
            <div className='name'>
                PeakFinder
            </div>
            <div className='id'>
                訂單編號：O20220404000548
            </div>
          </div>
        </div>
        <div className='table'>
          <Table 
            pagination={false}
            columns={columns} 
            dataSource={data} 
            expandRowByClick={true}
            expandIconColumnIndex={8}
            defaultExpandAllRows={true}
            expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}>test</p>,
                // expandIcon: () => <></>
              }}
            />
        </div>
      </div>
    </>
  )
}
export default CostDetail
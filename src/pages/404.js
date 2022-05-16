/* eslint-disable no-unused-vars */
import React from 'react'
import 'antd/dist/antd.css'

import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

const NotFound = (props) => {
  const { t } = props
  return (
    // For 404 or Other Error Page
    <>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">
        <Link to='/'>{t('Portal.NotFound')}</Link></Button>}
    />
  </>
  )
}

export default withTranslation()(NotFound)

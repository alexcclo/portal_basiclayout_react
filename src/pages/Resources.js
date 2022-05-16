import React from 'react'
import { Row, Col, Collapse } from 'antd'
import LineChart from '../components/Chart/LineChart'
import AreaChart from 'components/Chart/AreaChart'
import PieChart from 'components/Chart/PieChart'
import BarChart from 'components/Chart/BarChart'
import ScatterChart from 'components/Chart/ScatterChart'
import FunnelChart from 'components/Chart/FunnelChart'
import GaugeChart from 'components/Chart/GaugeChart'
import FloraChart from 'components/Chart/FloraChart'
import CandlestickChart from 'components/Chart/CandlestickChart'
import RadarChart from 'components/Chart/RadarChart'

import { connect } from 'react-redux'

const { Panel } = Collapse

const Resources = () => {
  let base = +new Date(1988, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let data = [[base, Math.random() * 300]];
  for (let i = 1; i < 20000; i++) {
    let now = new Date((base += oneDay));
    data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
  }
  return (
    <>
    <div style={{fontSize: 15, fontWeight: 'bold', overflow:'auto', marginTop: 64 }}>
      <Collapse defaultActiveKey={['1']} ghost>
        <Panel header = 'TestResource' key="1">
          <Row>
            <Col span = {12}>
              <AreaChart
                width="40vw"
                height="40vh"
                title="資源用量"
                data={data}     
              />
            </Col>
            <Col span = {12}>
              <LineChart 
                width="40vw"
                height="40vh"
                title="用戶總量"
                category={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} 
                data={[150, 230, 224, 218, 135, 147, 260]}  
                
              />
              {/* <Linechart width="40vw"  category={categorys} data={datass}  subtitle="" unit="" /> */}
            </Col>
          </Row>
          <Row>
            <Col span = {12}>
              <BarChart
                width="40vw"
                height="40vh"
                title="資源用量"
                category={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} 
                data={[150, 230, 224, 218, 135, 147, 260]}                
              />
            </Col>
            <Col span = {12}>
              <PieChart
                width="40vw"
                height="40vh"
                title="貨幣類型"
                category={['doge', 'btc', 'eth', 'shiba', 'sol']} 
                data={[150, 230, 224, 218, 135]}   
              />
            </Col>
          </Row>
        </Panel>
      </Collapse>
      <Collapse defaultActiveKey={['2']} ghost>
        <Panel header = 'TestResource1' key="2">
          <Row>
            <Col span = {12}>
              <ScatterChart
                width="40vw"
                height="40vh"
                title="分析數據"
              />
            </Col>
            <Col span = {12}>
              <FunnelChart
                width="40vw"
                height="40vh"
                title="操作次數"
              />
            </Col>
          </Row>
          <Row>
            <Col span = {12}>
              <CandlestickChart
                width="40vw"
                height="50vh"
                title="股票"
              />
            </Col>
            <Col span = {12}>
              <RadarChart
                width="40vw"
                height="50vh"
                title="營銷比較"
               />
            </Col>
          </Row>
        </Panel>
      </Collapse>
      <Collapse defaultActiveKey={['3']} ghost>
        <Panel header = 'TestResource2' key="3">

          <Row>
            <Col span = {24}>
              <GaugeChart 
                width="100vw"
                height="100vh"
                title="評分"
                value={70}
              />
            </Col>
          </Row>
          <Row>
            <Col span = {24}>
              <FloraChart
                width="100vw"
                height="100vh"
                title="咖啡種類"
              />
            </Col>
          </Row>
          <Row>
          </Row>
        </Panel>
      </Collapse>
    </div>
  </>
  )
}
const mapStateToProps  = (state) => ({users:state.apiReducers})
export default connect(mapStateToProps, '')(Resources)

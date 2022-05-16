import React from 'react';
import ReactECharts from 'echarts-for-react';  // or var ReactECharts = require('echarts-for-react');

export default function Chart(props) {
    return (
        <>
        <ReactECharts
            option = {props.option}
            notMerge = {true}
            lazyUpdate = {true}
            style = {{ width:`${props.ChartWidth}`, height:`${props.ChartHeight}` }}
        />
        </>
    )
}



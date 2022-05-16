import Chart from './Chart'

export default function LineChart(props) {
    const LineOption = {
      title: {
        left: 'center',
        text: props.title
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: props.category
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: props.data
        }
      ]
      };
    return (
        <div>
            <Chart 
              option={LineOption}
              ChartHeight={props.height}
              ChartWidth={props.width}
            />
        </div>
    )
}

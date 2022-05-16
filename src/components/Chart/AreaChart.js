import Chart from './Chart'

export default function AreaChart(props) {

    const AreaOption = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: props.title
      },
      xAxis: {
        type: 'time', 
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 20
        },
        {
          start: 0,
          end: 20
        }
      ],
      series: [
        {
          name: 'Fake Data',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: props.data
        }
      ]
    };
    return (
        <div>
            <Chart 
              option={AreaOption}
              ChartHeight={props.height}
              ChartWidth={props.width}            />
        </div>
    )
}

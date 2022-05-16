import Chart from './Chart'

export default function BarChart(props) {
    const BarOption = {
        title: {
          left: 'center',
          text: props.title
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: props.category,
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: 'Direct',
              type: 'bar',
              barWidth: '60%',
              data: props.data
            }
          ]
      };
    return (
        <div>
            <Chart 
                option={BarOption}
                ChartHeight={props.height}
                ChartWidth={props.width}
            />
        </div>
    )
}


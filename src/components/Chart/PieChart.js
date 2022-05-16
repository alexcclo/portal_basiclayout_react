import Chart from './Chart'

export default function PieChart(props) {
  const result = props.category.reduce((o, k, i) => ([...o, { name: k, value: props.data[i] }]), [])
    const PieOption = {
        tooltip: {
            trigger: 'item'
          },
          title: {
            left: 'center',
            text: props.title
          },
          legend: {
            orient: 'vertical',
            left: 'right'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: result
            }
          ]
      };
    return (
        <div>
            <Chart 
                option={PieOption}
                ChartHeight={props.height}
                ChartWidth={props.width}
            />
        </div>
    )
}

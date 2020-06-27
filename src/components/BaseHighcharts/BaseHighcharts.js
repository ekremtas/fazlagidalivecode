import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BaseHighcharts = (props) => {

  const {data} = props; 

  const options = {
    chart: {
      type: data.chart,
    },
    title: {
      text: data.title,
    },
    xAxis: {
      type: data.xAxisType,
    },
    yAxis: {
      title: {
        text: data.yAxisTitle,
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>',
    },

    series: [
      {
        name: data.name,
        colorByPoint: true,
        data: data.data,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BaseHighcharts;

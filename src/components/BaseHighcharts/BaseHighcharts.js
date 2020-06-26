import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BaseHighcharts = (props) => {

  const {data} = props; 

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Top 20",
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Total percent market share",
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
        name: "Tracks",
        colorByPoint: true,
        data: data,
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

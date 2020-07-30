import React from 'react';
import chart from 'chart.js'
import { Line }from 'react-chartjs-2'

const Chart = function(props){

  var dates= props.data.dates;
  var values= props.data.values;

  var charData = {
    labels: dates,
    datasets: [
      {
        label: "Bitcoin (BTC)",
        backgroundColor: "rgb(101,197,226)",
        borderColor: "rgb(240,44,123)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(240,44,123)',
        pointBackgroundColor: 'rgba(240,44,123)',
        pointBorderWidth: 3,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(232,246,144)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: values
      }
    ]
  };


  return(
    <div>
      <Line data={charData} />
    </div>
  )

}

export default Chart;
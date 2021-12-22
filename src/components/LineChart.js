
import React from 'react';
// import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

import   {Title as myTitle} from "antd/lib/typography";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

   const data = {
    labels:coinTimestamp,
    datasets: [
      {
        label: (coinName+" Price"),
        data: coinPrice,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
     
    ],
  };
 
 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
  

  
 

  

  // const data = {
  //   labels: coinTimestamp,
  //   datasets: [
  //     {
  //       label: 'Price In USD',
  //       data: coinPrice,
  //       fill: false,
  //       backgroundColor: '#0071bd',
  //       borderColor: '#0071bd',
  //     },
  //   ],
  // };

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };

  return (
    <>
      <Row className="chart-header">
        <myTitle level={2} className="chart-title">{coinName} Price Chart </myTitle>
        <Col className="price-container">
          <myTitle level={5} className="price-change">Change: {coinHistory?.data?.change}%</myTitle>
          <myTitle level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</myTitle>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
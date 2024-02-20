import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d';

// Initialize the 3D extension
highcharts3d(Highcharts);

const PieChart = ({ pools, blockCount }) => {
  // Prepare data for Highcharts
  const chartData = pools.map(pool => ({
    name: pool.name,
    y: (pool.blockCount / blockCount) * 100
  }));

  // Highcharts configuration options for a 3D donut chart
  const options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Miner pool distribution'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        innerSize: '50%', // Set the innerSize to make it a donut chart
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Percentage',
      colorByPoint: true,
      data: chartData
    }]
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default PieChart;

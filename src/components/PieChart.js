import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ pools, blockCount }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(myChartRef, {
      type: 'pie',
      data: {
				labels: pools.map(pool => `${pool.name} ${(pool.blockCount / blockCount * 100).toFixed(1)}%`),
        datasets: [
          {
            data: pools.map(pool => pool.blockCount),
            backgroundColor: [
              'red', 'blue', 'green', 'orange', 'purple', 'yellow',
              'teal', 'pink', 'brown', 'cyan', 'magenta', 'lime',
              'lightblue', 'lightgreen', 'lightpink'
            ],
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'right'
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [pools, blockCount]);

  return (
		<div>
			<h2>Miner pool distribution</h2>
			<div style={{ width: '400px', height: '400px' }}>
      	<canvas ref={chartRef}></canvas>
    	</div>
		</div>
    
  );
};

export default PieChart;

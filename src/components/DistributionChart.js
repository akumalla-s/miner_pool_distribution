import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';

const DistributionChart = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch('https://mempool.space/api/v1/mining/pools/24h')
      .then(response => response.json())
      .then(data => {
				console.log(data);
				setApiData(data);
			})
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {apiData && <PieChart pools={apiData.pools} blockCount={apiData.blockCount} />}
    </div>
  );
};

export default DistributionChart;

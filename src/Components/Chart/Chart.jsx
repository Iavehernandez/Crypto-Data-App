import {Line} from 'react-chartjs-2';
import getCoinChart from '../../Services/cryptoApi';
import { useState, useEffect } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
);  

const Chart = ({coinId}) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchChart = async () => {
            const data = await getCoinChart(coinId);

             console.log(data);

            const prices = data.prices.map ((item) => item [1]);

            setChartData({
                labels: prices.map((_, index) => index),
                datasets: [
                    {
                        data: prices,
                    },
                ],
            });
        };

        fetchChart();
    }, [coinId]) ;

    if (!chartData) return <p>Loading Chart</p>
    return (
        <Line data={chartData} />
    );
}


export default Chart;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ selectedMonth }) => {
    const [chartData, setChartData] = useState({});

    const fetchBarChart = async (month) => {
        try {
            const response = await axios.get('http://localhost:3000/api/bar-chart', { params: { month } });
            const data = {
                labels: Object.keys(response.data),
                datasets: [
                    {
                        label: '# of Items',
                        data: Object.values(response.data),
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    }
                ],
            };
            setChartData(data);
        } catch (error) {
            console.error('Error fetching bar chart data', error);
        }
    };

    useEffect(() => {
        fetchBarChart(selectedMonth);
    }, [selectedMonth]);

    return <Bar data={chartData} />;
};

export default BarChart;

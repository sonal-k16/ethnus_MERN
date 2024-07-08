import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = ({ selectedMonth }) => {
    const [statistics, setStatistics] = useState({ totalSaleAmount: 0, totalSoldItems: 0, totalNotSoldItems: 0 });

    const fetchStatistics = async (month) => {
        try {
            const response = await axios.get('http://localhost:3000/api/statistics', { params: { month } });
            setStatistics(response.data);
        } catch (error) {
            console.error('Error fetching statistics', error);
        }
    };

    useEffect(() => {
        fetchStatistics(selectedMonth);
    }, [selectedMonth]);

    return (
        <div>
            <h3>Statistics for {selectedMonth}</h3>
            <p>Total Sale Amount: {statistics.totalSaleAmount}</p>
            <p>Total Sold Items: {statistics.totalSoldItems}</p>
            <p>Total Not Sold Items: {statistics.totalNotSoldItems}</p>
        </div>
    );
};

export default Statistics;

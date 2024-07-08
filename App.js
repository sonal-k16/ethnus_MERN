import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';

const App = () => {
    const [selectedMonth, setSelectedMonth] = useState('March');
    const [search, setSearch] = useState('');

    return (
        <div className="App">
            <h1>Transactions Dashboard</h1>
            <label>
                Select Month:
                <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
            </label>
            <label>
                Search:
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            </label>
            <TransactionsTable selectedMonth={selectedMonth} search={search} />
            <Statistics selectedMonth={selectedMonth} />
            <BarChart selectedMonth={selectedMonth} />
        </div>
    );
};

export default App;

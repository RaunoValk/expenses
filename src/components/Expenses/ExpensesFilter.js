import React from 'react';
import './ExpensesFilter.css';
import { useState } from 'react';



const ExpensesFilter = () => {
    const[selectedYear, setSelectedYear] = useState('');

    const dateChangeHandler = (event) => {
        setSelectedYear(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select
                    value={selectedYear}
                    onChange={dateChangeHandler}
            >
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
        
    );
};

export default ExpensesFilter;
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'; 


const Expenses = (props) => {
    const[selectedYear, setSelectedYear] = useState('');
    
    const filterChangeHandler = (selectedYear) => {
        console.log(`Year data in Expenses.js`, selectedYear);
        setSelectedYear(selectedYear);
    }

    return(
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear}
            onChangeFilter={filterChangeHandler}/>  
            
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
    </Card>
);
} 
export default Expenses;
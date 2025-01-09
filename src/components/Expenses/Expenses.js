import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'


const Expenses = (props) => {

    return(
        <Card className="expenses">
            <ExpensesFilter/>
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
    </Card>
);
} 
export default Expenses;
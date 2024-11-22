import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    return(
        <div className='expense-item'>
            <ExpenseDate date={props.dataname.date}/>  
            <div className='expense-item__description'>
                <h2>{props.dataname.title}</h2>
                <div className='expense-item__price '>{props.dataname.price}</div>
            </div>
            
        </div>
)
} 
export default ExpenseItem;
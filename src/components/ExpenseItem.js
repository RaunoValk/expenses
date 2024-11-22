import './ExpenseItem.css'

const ExpenseItem = (props) => {

    console.log(props)
    console.log(props.dataname)

    return(
        <div className='expense-item'>
            <div>{props.dataname.date.toString()}</div>
                <div className='expense-item__description'>
                <h2>{props.dataname.title}</h2>
                <div className='expense-item__price '>{props.dataname.price}</div>
            </div>
            
        </div>
)
} 
export default ExpenseItem;
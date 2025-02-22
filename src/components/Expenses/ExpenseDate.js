import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('et-EE',{month: 'long'})
    const day = props.date.toLocaleString('et-EE',{day: '2-digit'})
    const year = props.date.getFullYear()

    return(
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__day'>{day}</div>
                <div className='expense-date__yea'>{year}</div>
            </div>
        )
    } 
export default ExpenseDate;

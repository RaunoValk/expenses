import './App.css';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenses =[  
  { 
  date: new Date(2024, 10, 22),
  title: 'New Book',
  price: 30.99
},
  { 
  date: new Date(2024, 10, 12),
  title: 'New Jeans',
  price: 99.99
  },  

]

  return (
    <div className="App">
    <ExpenseItem dataname={expenses[0]}/>
    <ExpenseItem dataname={expenses[1]}/>
    </div>
  );
}

export default App;

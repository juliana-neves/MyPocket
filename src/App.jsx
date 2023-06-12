import Form from "./components/Form/Form";
import Expenses from './components/Expenses/Expenses';
import { useState } from "react";


function App() {

  const categories = [
    {
      name: 'Entertainment',
      icon: '🎉',
      backgroung: '#ACC1DE',
    },
    {
      name: 'Groceries',
      icon: '🍎',
      backgroung: '#B6D9C5',
    },
    {
      name: 'Health',
      icon: '💊',
      backgroung: '#BAD2F3',
    },
    {
      name: 'Insurance',
      icon: '🔑',
      backgroung: '#BDEBEB',
    },
    {
      name: 'Restaurants',
      icon: '🍽️',
      backgroung: '#CDEAD9',
    },
    {
      name: 'Rent',
      icon: '🏡',
      backgroung: '#D2D1F8',
    },
    {
      name: 'Services',
      icon: '🛎️',
      backgroung: '#DAC4EF',
    },
    {
      name: 'Shopping',
      icon: '🛍️',
      backgroung: '#F2C6C6',
    },
    {
      name: 'Transport',
      icon: '🚌',
      backgroung: '#F2C6E1',
    },
    {
      name: 'Travel',
      icon: '✈️',
      backgroung: '#F5DAC2',
    },
    {
      name: 'Utilities',
      icon: '⚙️',
      backgroung: '#F5E8C3',
    },
  ]

  const [expenses, setExpenses] = useState([]);
  const addExpense = (expense) => {
    console.log(expense);
    setExpenses([...expenses, expense])
  }

  return (
    <div>
      <Form categories={categories.map(category => category.name)} expenseRegistered={expense => addExpense(expense)} />


      {categories.map(category => <Expenses
        key={category.name}
        name={category.name}
        icon={category.icon}
        backgroung={category.backgroung}
      />)}

    </div>
  )
}

export default App

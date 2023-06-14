import Form from "./components/Form/Form";
import Categories from './components/Categories/Categories';
import { useState } from "react";
import {v4 as uuid} from 'uuid';


function App() {

  const categories = [
    {
      name: 'Entertainment',
      icon: '🎉',
      background: '#F4E6EF',
      colorcard: '#EB57B0',
    },
    {
      name: 'Groceries',
      icon: '🍎',
      background: '#F3D5D5',
      colorcard: '#EB5757',
    },
    {
      name: 'Health',
      icon: '💊',
      background: '#F5F1E5',
      colorcard: '#F2C94C',
    },
    {
      name: 'Insurance',
      icon: '🔑',
      background: '#F4E3D3',
      colorcard: '#F2994A',
    },
    {
      name: 'Restaurants',
      icon: '🍽️',
      background: '#DAEDE2',
      colorcard: '#6FCF97',
    },
    {
      name: 'Rent',
      icon: '🏡',
      background: '#CFEEEE',
      colorcard: '#38D3D3',
    },
    {
      name: 'Services',
      icon: '🛎️',
      background: '#CDDEF3',
      colorcard: '#2F80ED',
    },
    {
      name: 'Shopping',
      icon: '🛍️',
      background: '#E3D4F1',
      colorcard: '#9B51E0',
    },
    {
      name: 'Transport',
      icon: '🚌',
      background: '#DEDCF7',
      colorcard: '#807AFD',
    },
    {
      name: 'Travel',
      icon: '✈️',
      background: '#EFD0F7',
      colorcard: '#D83EFF',
    },
  ]

  const [expenses, setExpenses] = useState([]);
  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  return (
    <div>
      <Form
        categories={categories.map(category =>
          category.name)}
        expenseRegistered={expense =>
          addExpense(expense)}
        colorcard={categories.map(category =>
          category.colorcard)}
      />
      {categories.map(category => (
        <Categories
          key={uuid()}
          name={category.name}
          icon={category.icon}
          background={category.background}
          colorcard={category.colorcard}
          expenses={expenses.filter((expense) => expense.category === category.name)}
        />))}
    </div>
  )
}

export default App

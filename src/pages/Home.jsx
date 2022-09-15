import React, { useState } from 'react';
import { TodoItem } from '../components';

const data = [
  {
    id: 1,
    title: 'Finish the essay collaboration',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Read the next chapter of the book',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Send the asssignment',
    isCompleted: false,
  },
]

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find(t => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter( t => t.id !== id));
  }

  return (
    <div className='w-4/5 mx-auto text-white'>
      <h1 className='mb-6 text-2xl font-bold'>My ToDo's</h1>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  )
}

export default Home
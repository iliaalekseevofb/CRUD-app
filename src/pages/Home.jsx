import React from 'react';
import { TodoItem } from '../components';

const todos = [
  {
    title: 'Finish the essay collaboration',
    isCompleted: false,
  },
  {
    title: 'Read the next chapter of the book',
    isCompleted: false,
  },
  {
    title: 'Send the asssignment',
    isCompleted: false,
  },
]

const Home = () => {
  return (
    <div className='text-white'>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  )
}

export default Home
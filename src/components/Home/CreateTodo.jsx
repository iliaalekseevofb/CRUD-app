import React, { useState } from 'react';

const CreateTodo = ({todos, setTodos}) => {
  const [title, setTitle] = useState('');

  const addTodo = (title) => {
    setTodos([
      {
        id: todos.length + 1,
        title,
        isCompleted: false
      }, ...todos]
    )
    setTitle('');
  }

  return (
    <div className='w-full mt-10 mb-4 px-5 py-3 flex items-center justify-between rounded-2xl border-2 border-zinc-800'>
      <input 
        className='bg-transparent w-full border-none outline-none'
        type="text"
        placeholder='Add a task...'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={(e) => e.key === 'Enter' && addTodo(title)}
       />
    </div>
  )
}

export default CreateTodo
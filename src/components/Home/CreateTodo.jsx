import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';

const CreateTodo = ({todos, setTodos}) => {
  const [title, setTitle] = useState('');

  const addTodo = (title) => {
    title && setTodos([
      {
        id: todos.length + 1,
        title,
        isCompleted: false
      }, ...todos]
    )
    setTitle('');
  }

  return (
    <div className='w-full mt-6 mb-4 px-5 py-3 flex items-center justify-between rounded-2xl border-2 border-zinc-800'>
      <input 
        className='bg-transparent w-full border-none outline-none'
        type="text"
        placeholder='Add a task...'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={(e) => e.key === 'Enter' && addTodo(title)}
       />
       <button onClick={() => addTodo(title)} className='w-[25px] h-[25px] min-w-[25px] min-h-[25px] ml-4 flex justify-center items-center bg-pink-400 rounded-lg'>
        <BsPlusLg className='text-zinc-800' size={14} />
       </button>
    </div>
  )
}

export default CreateTodo
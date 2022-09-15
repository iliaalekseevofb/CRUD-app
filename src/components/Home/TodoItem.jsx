import React from 'react';
import CheckBox from './CheckBox';
import { BsTrash } from 'react-icons/bs';

const TodoItem = ({todo, changeTodo, removeTodo}) => {
  return (
    <div className='w-full mb-4 p-5 flex items-center justify-between rounded-2xl bg-zinc-800'>
      <button onClick={() => changeTodo(todo.id)} className='flex items-center'>
        <CheckBox isCompleted={todo.isCompleted}/>
        <span className={`text-left ${todo.isCompleted ? 'line-through' : ''}`}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash size={24} className='text-zinc-500 hover:text-red-500 transition-colors duration-200'/>
      </button>
    </div>
  )
}

export default TodoItem
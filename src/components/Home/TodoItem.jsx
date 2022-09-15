import React from 'react';
import CheckBox from './CheckBox';
import { BsTrash } from 'react-icons/bs';

const TodoItem = ({todo, changeTodo, removeTodo}) => {
  return (
    <button onClick={() => changeTodo(todo.id)} className='w-full mb-4 p-5 flex items-center rounded-2xl bg-zinc-800'>
      <CheckBox isCompleted={todo.isCompleted}/>
      <span className={`${todo.isCompleted ? 'line-through' : ''}`}>
        {todo.title}
      </span>
    </button>
  )
}

export default TodoItem
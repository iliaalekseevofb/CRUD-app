import React from 'react';
import { BsCheck } from 'react-icons/bs';

const CheckBox = ({isCompleted}) => {
  return (
    <div className={`w-7 h-7 mr-3 border-2 rounded-lg overflow-hidden border-pink-400 ${isCompleted ? 'bg-pink-400' : ''}`}>
      {isCompleted && <BsCheck size={24} className='text-zinc-800' />}
    </div>
  )
}

export default CheckBox
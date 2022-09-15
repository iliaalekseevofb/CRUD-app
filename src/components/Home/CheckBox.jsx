import React from 'react';
import { BsCheck } from 'react-icons/bs';

const CheckBox = ({isCompleted}) => {
  return (
    <div className={`w-[25px] min-w-[25px] h-[25px] flex justify-center items-center min-h-[25px] mr-3 border-2 rounded-lg overflow-hidden border-pink-400 ${isCompleted ? 'bg-pink-400' : ''}`}>
      <BsCheck size={24} className='text-zinc-800' />
    </div>
  )
}

export default CheckBox
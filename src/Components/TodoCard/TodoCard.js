import React from 'react';
import { IoTrashBin } from 'react-icons/io5'

const TodoCard = ({ handleDelete }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 line-through">Card with no image</h2>
                <p className="text-gray-700 line-through">This is my cool new card!</p>
            </div>
            <div className='flex items-center gap-5'>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2 hidden">Complete</button>
                <button type="button" class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-400 cursor-not-allowed" disabled>Completed</button>
                <button onClick={() => handleDelete(1)} className='bg-red-700 block p-3 rounded-full hover:bg-red-400 hover:text-red-700 transition-all ease-in-out duration-100'>
                    <IoTrashBin className='text-xl' />
                </button>
            </div>
        </div>
    );
};

export default TodoCard;
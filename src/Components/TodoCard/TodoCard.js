import React from 'react';

const TodoCard = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 line-through">Card with no image</h2>
                <p className="text-gray-700 line-through">This is my cool new card!</p>
            </div>
            <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2 hidden">Complete</button>
                <button type="button" class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-400 cursor-not-allowed" disabled>Completed</button>
            </div>
        </div>
    );
};

export default TodoCard;
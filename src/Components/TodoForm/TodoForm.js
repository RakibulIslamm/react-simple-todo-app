import React from 'react';

const TodoForm = () => {
    return (
        <form className="flex justify-center flex-col w-[400px] gap-5 bg-gray-900 p-10 min-h-screen">
            <h2 className="text-2xl font-bold">Todo App</h2>
            <div className="col-span-full sm:col-span-3">
                <label for="username" className="text-sm">Title</label>
                <input id="username" type="text" placeholder="Title" className="w-full px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full">
                <label for="bio" className="text-sm">Description</label>
                <textarea id="bio" placeholder="Description" className="w-full px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-600 font-medium text-sm px-5 py-2">Add</button>
        </form>
    );
};

export default TodoForm;
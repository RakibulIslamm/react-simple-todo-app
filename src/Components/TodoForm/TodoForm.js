import React from 'react';

const TodoForm = ({ setTodos, todos }) => {

    const handleSubmitTodo = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const newTodo = { id: todos.length + 1, title, description, completed: false };
        setTodos([newTodo, ...todos]);
    }

    return (
        <form onSubmit={handleSubmitTodo} className="flex justify-center flex-col sticky top-0 w-[400px] gap-5 bg-gray-900 p-10 min-h-screen">
            <h2 className="text-2xl font-bold">Todo App</h2>
            <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Title</label>
                <input type="text" name='title' placeholder="Title" className="w-full px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full">
                <label className="text-sm">Description</label>
                <textarea placeholder="Description" name='description' className="w-full px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-600 font-medium text-sm px-5 py-2">Add</button>
        </form>
    );
};

export default TodoForm;
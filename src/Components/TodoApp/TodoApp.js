import React from 'react';
import TodoCard from '../TodoCard/TodoCard';
import TodoForm from '../TodoForm/TodoForm';

const TodoApp = () => {
    return (
        <>
            <section class="min-h-screen dark:bg-gray-800 dark:text-gray-50 flex">
                <TodoForm />
                <div className='p-10 space-y-5'>
                    <TodoCard />
                </div>
            </section>
        </>
    );
};

export default TodoApp;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiReset } from 'react-icons/bi';
import { confirmAlert } from 'react-confirm-alert';
import Alert from '../Alert/Alert';
import { toast } from 'react-toastify';

const TodoForm = ({ setTodos, todos }) => {

    const navigate = useNavigate();

    const handleSubmitTodo = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const storedTodos = localStorage.getItem('todos');
        const allTodos = [];
        if (storedTodos) {
            const newTodo = { id: todos.length + 1, title, description, completed: false };
            allTodos.push(newTodo, ...JSON.parse(storedTodos))
            localStorage.setItem('todos', JSON.stringify(allTodos));
        }
        else {
            const newTodo = { id: 1, title, description, completed: false };
            allTodos.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(allTodos));
        }
        setTodos(allTodos);
        e.target.reset();

    }

    // Handle Log out
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    }

    // Handle Reset Todos
    const handleResetTodos = () => {
        const handleAlert = (close, confirmation) => {

            if (confirmation) {
                localStorage.removeItem('todos');
                setTodos()
                toast.success('Todos reset successfully')
            }
            else {
                console.log('not deleted');
                close();
            }
            close();
        }
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <Alert onClose={onClose} handleAlert={handleAlert} action='reset' />
                )
            }
        });
    }

    return (
        <div className='sticky top-0 w-[400px] bg-gray-900 p-10 min-h-screen'>
            <form onSubmit={handleSubmitTodo} className="flex justify-center flex-col gap-5">
                <h2 className="text-2xl font-bold">Todo App</h2>
                <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Title</label>
                    <input type="text" name='title' placeholder="Title" className="w-full px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                </div>
                <div className="col-span-full">
                    <label className="text-sm">Description</label>
                    <textarea placeholder="Description" name='description' className="w-full px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-600 font-medium text-sm px-5 py-2">Add</button>
            </form>
            <br />
            <br />
            <div className='flex justify-between items-center'>
                <button onClick={handleLogout}>Logout</button>
                <button className='flex items-center gap-2 bg-red-900 px-4 py-1' onClick={handleResetTodos}><BiReset />Reset todos</button>
            </div>
        </div>
    );
};

export default TodoForm;
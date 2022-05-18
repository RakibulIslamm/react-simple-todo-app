import React, { useState } from 'react';
import TodoCard from '../TodoCard/TodoCard';
import TodoForm from '../TodoForm/TodoForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import Alert from '../Alert/Alert';


const TodoApp = () => {
    const allTodos = JSON.parse(localStorage.getItem('todos'))
    const [todos, setTodos] = useState(allTodos);

    const handleDelete = (singleTodo) => {
        const handleAlert = (close, confirmation) => {

            if (confirmation) {
                const newTodos = todos.filter(todo => todo.id !== singleTodo.id);
                setTodos(newTodos);
                localStorage.setItem('todos', JSON.stringify(newTodos));
                if (!newTodos.length) {
                    setTodos('');
                    localStorage.removeItem('todos')
                }
                toast.success('Todo deleted successfully')
            }
            else {
                close();
            }
            close();
        }
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <Alert onClose={onClose} handleAlert={handleAlert} action='delete' />
                )
            }
        });
    }


    // Handle Todo Completed
    const handleCompleteDoto = (singleTodo) => {
        const newTodos = todos.map(todo => {
            if (todo.id === singleTodo.id) {
                return { ...todo, completed: true }
            }
            return todo;
        }
        );
        toast('Successfully Completed The Task');
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos))
    }


    return (
        <>
            <section className="min-h-screen dark:bg-gray-800 dark:text-gray-50 flex">
                <div>
                    <TodoForm setTodos={setTodos} todos={todos} />
                </div>
                {todos ? <div className='p-10 space-y-5'>
                    {todos.map(todo => (<TodoCard key={todo.id} todo={todo} handleDelete={handleDelete} handleCompleteDoto={handleCompleteDoto} />))}
                </div> : <div className='flex justify-center items-center w-full'>
                    <h2 className='text-3xl text-gray-400'>You have no todos</h2>
                </div>}
            </section>
            <ToastContainer position="bottom-left" />
        </>
    );
};

export default TodoApp;
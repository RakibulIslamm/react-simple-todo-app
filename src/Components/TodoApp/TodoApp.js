import React, { useState } from 'react';
import TodoCard from '../TodoCard/TodoCard';
import TodoForm from '../TodoForm/TodoForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import Alert from '../Alert/Alert';

let todoList = [
    { id: 1, title: 'Todo 1', description: 'This is my first todo', completed: false },
    { id: 2, title: 'Todo 2', description: 'This is my second todo', completed: false },
    { id: 3, title: 'Todo 3', description: 'This is my third todo', completed: false },
    { id: 4, title: 'Todo 4', description: 'This is my fourth todo', completed: false },
    { id: 5, title: 'Todo 5', description: 'This is my fifth todo', completed: false }
]

const TodoApp = () => {
    const [todos, setTodos] = useState(todoList);

    const handleDelete = (singleTodo) => {
        const handleAlert = (close, confirmation) => {

            if (confirmation) {
                // console.log(singleTodo);
                const newTodos = todos.filter(todo => todo.id !== singleTodo.id);
                setTodos(newTodos);
                toast.success('Todo deleted successfully')
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
                    <Alert onClose={onClose} handleAlert={handleAlert} />
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
        setTodos(newTodos);
    }


    return (
        <>
            <section className="min-h-screen dark:bg-gray-800 dark:text-gray-50 flex">
                <div>
                    <TodoForm setTodos={setTodos} todos={todos} />
                </div>
                <div className='p-10 space-y-5'>
                    {todos.map(todo => (<TodoCard key={todo.id} todo={todo} handleDelete={handleDelete} handleCompleteDoto={handleCompleteDoto} />))}
                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default TodoApp;
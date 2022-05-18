import React from 'react';
import TodoCard from '../TodoCard/TodoCard';
import TodoForm from '../TodoForm/TodoForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import Alert from '../Alert/Alert';

const TodoApp = () => {



    const handleDelete = (id) => {
        const handleAlert = (close, confirmation) => {

            if (confirmation) {
                console.log('Deleted');
                toast.success('List deleted successfully')
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


    return (
        <>
            <section class="min-h-screen dark:bg-gray-800 dark:text-gray-50 flex">
                <TodoForm />
                <div className='p-10 space-y-5'>
                    <TodoCard handleDelete={handleDelete} />
                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default TodoApp;
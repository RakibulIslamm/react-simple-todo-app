import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = { email, password };
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            navigate(from);
        }
    }

    if (user) {
        navigate(from);
    }


    return (
        <section className="min-h-screen flex justify-center items-center gradient-form bg-gray-800">
            <div className="container py-12 px-6 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="xl:w-10/12">
                        <div className="block bg-white shadow-lg rounded-lg">
                            <div className="lg:flex lg:flex-wrap g-0">
                                <div className="lg:w-6/12 px-4 md:px-0">
                                    <div className="md:p-12 md:mx-6">
                                        <div>
                                            <h4 className="text-2xl font-bold mt-1 pb-1">React Todo App</h4>
                                            <h4 className="text-md font-semibold mt-1 mb-8 pb-1">Please Login first</h4>
                                            <p className="text-sm mt-1 mb-8 pb-1">You can login through any email and password</p>
                                        </div>
                                        <form onSubmit={handleLogin}>
                                            <div className="mb-4">
                                                <input type="text" name='email' className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email" />
                                            </div>
                                            <div className="mb-4">
                                                <input type="password" name='password' className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                                            </div>
                                            <div className="text-center pt-1 mb-12 pb-1">
                                                <button className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3" type="submit" data-mdb-ripple="true" data-mdb-ripple-color="light" style={{ background: 'linear-gradient(to right,#191970, #1c2841, #000036)' }}>Log in</button>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                                    style={{ background: 'linear-gradient(to right, #191970, #1c2841, #000036)' }}>
                                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                        <h4 className="text-2xl font-semibold mb-6">Organize your work and life</h4>
                                        <p className="text-sm">Trusted by 30 million people and teams. Todoist is the world's favorite task manager and to-do list app. Finally become focused, organized and calm.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
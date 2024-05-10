import React, { useEffect, useState } from 'react'
import { Button, Navbar, NavbarBrand } from "flowbite-react";
import { FaUsers } from "react-icons/fa";
import { getAllAccounts } from '../services/AllApi';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [uname, setUname] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllAccounts()
                console.log(response);
            } catch (error) {
                console.error('Error fetching accounts', error)
            }
        }
        fetchData()
    }, [])

    const handleLogin = async () => {
        try {
            const response = await getAllAccounts();
            const accounts = response.data;
            const user = accounts.find(account => account.f_userName === uname && account.f_Pwd === password);
            if (user) {
                // Authentication successful, save username to local storage and navigate to authenticated route
                localStorage.setItem('username', uname);
                console.log('Authentication successful:', user);
                navigate('/home')
            } else {
                setError('Invalid user name or password');
            }
        } catch (error) {
            console.error('Error fetching accounts:', error);
            setError('Internal server error');
        }
    };


    return (
        <div>

            {/* Navbar */}
            <Navbar className=' bg-slate-50 py-4 px-3'>
                <NavbarBrand href="#">
                    <FaUsers size={36} />
                </NavbarBrand>
            </Navbar>

            {/* Login form */}
            <div className="flex flex-col items-center justify-center pt-24 px-3">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-center p-2 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-6">

                            {/* user name */}
                            <div>
                                <label for="uname" className="block mb-2 text-sm font-medium text-gray-900">User Name</label>
                                <input type="text" id="uname" name="f_userName" value={uname} onChange={e => setUname(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Enter your username" required="" formControlName="uname" />
                            </div>

                            {/* password */}
                            <div>
                                <label for="password"
                                    className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" id="password" placeholder="••••••••" name='f_Pwd' value={password} onChange={e => setPassword(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required="" formControlName="password" />
                            </div>

                            {/* login button */}
                            <Button onClick={handleLogin} className=' w-full' color="success">Login</Button>
                            {error && <p className="text-red-500">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
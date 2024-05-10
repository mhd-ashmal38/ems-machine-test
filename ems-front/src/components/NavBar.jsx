import React, { useEffect, useState } from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { FaUsers } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NavBar() {

    const location = useLocation()
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Retrieve username from local storage
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);
    }, []);

    const handleLogout = () => {
        // Clear username from local storage
        localStorage.removeItem('username');
        // Clear the username state
        setUsername('');
        // Redirect to '/' page
        navigate('/');
    };

    return (
        <div>

            <Navbar className=' bg-slate-50 py-4 px-3'>
                <NavbarBrand href="#">
                    <FaUsers size={36} />
                </NavbarBrand>
                <div className="flex md:order-2 gap-4">
                    <p className='flex items-center'>{username} -</p>
                    <Button onClick={handleLogout}>Logout</Button>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <Link to={'/home'}>
                        <NavbarLink href="/home" active={location.pathname === '/home'} className='text-lg'>
                            Home
                        </NavbarLink>
                    </Link>
                    <Link to={'/employee-list'}>
                        <NavbarLink href="/employee-list" active={location.pathname === '/employee-list'} className='text-lg'>
                            Employee List
                        </NavbarLink>
                    </Link>
                </NavbarCollapse>
            </Navbar>

        </div>
    )
}

export default NavBar
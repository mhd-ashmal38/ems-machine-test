import React from 'react'
import { Button, Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { FaUsers } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

function NavBar() {

    const location = useLocation()

    return (
        <div>

            <Navbar className=' bg-slate-50 py-4 px-3'>
                <NavbarBrand href="#">
                    <FaUsers size={36} />
                </NavbarBrand>
                <div className="flex md:order-2 gap-4">
                    <Dropdown label="Dropdown" inline>
                        <DropdownItem>Dashboard</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                        <DropdownItem>Earnings</DropdownItem>
                        <DropdownItem>Sign out</DropdownItem>
                    </Dropdown>
                    <Button>Logout</Button>
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
import React from 'react'
import NavBar from './NavBar'
import { Button, ButtonGroup, Dropdown, DropdownItem, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from 'react-router-dom';

function EmployeeList() {
  return (
    <div>

      <NavBar />

      <div className='pt-10 px-5'>
        <p>Total Count : 4</p>
      </div>

      <div className='flex justify-between px-5 pt-10'>
        <div className="flex">
          <div>
            <input className="border border-black text-gray-900 sm:text-sm focus:border-primary-600 block p-2.5 w-56"
              placeholder="Search by name" />
          </div>
          <div className='border border-black text-gray-900 sm:text-sm focus:border-primary-600 block p-2.5'>
            <Dropdown label="Sort by" inline>
              <DropdownItem>Id</DropdownItem>
              <DropdownItem>Name</DropdownItem>
              <DropdownItem>Email</DropdownItem>
              <DropdownItem>Date</DropdownItem>
            </Dropdown>
          </div>
        </div>

        <Link to={'/create-employee'}><Button color="success">Create Employee</Button></Link>
      </div>

      <div className="overflow-x-auto px-5 pt-16">
        <Table>
          <TableHead>
            <TableHeadCell>Unique Id</TableHeadCell>
            <TableHeadCell>Image</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Mobile No</TableHeadCell>
            <TableHeadCell>Designation</TableHeadCell>
            <TableHeadCell>Gender</TableHeadCell>
            <TableHeadCell>Course</TableHeadCell>
            <TableHeadCell>Create date</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell>1</TableCell>
              <TableCell>
                <img className="w-10 h-10 rounded-full" src='https://imgs.search.brave.com/eRzvw39IjS5KTDDK_9PwOuxjaR9-IgdHZXLRV8FpkHk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTAw/ODk0MjEzL3Bob3Rv/L3BvcnRyYWl0LW9m/LXlvdW5nLW1hbGUt/ZmFzaGlvbi1tb2Rl/bC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9YjVfcUU3aUNl/S24xQXdYYk5fOThn/WnZWYTVTOVdfbGtU/U0FJX0VFaDFQcz0' />
              </TableCell>
              <TableCell>Joby</TableCell>
              <TableCell>joby@gmail.com</TableCell>
              <TableCell>7894568523</TableCell>
              <TableCell>HR</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>B.Tech</TableCell>
              <TableCell>12-05-24</TableCell>
              <TableCell className='flex gap-3 pt-6'>
                <Link to={'/edit-employee'} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                </Link>
                -
                <a href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                  Delete
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

    </div>
  )
}

export default EmployeeList
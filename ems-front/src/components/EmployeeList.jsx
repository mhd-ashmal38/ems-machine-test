import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Button, Dropdown, DropdownItem, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link, useParams } from 'react-router-dom';
import { deleteEmployee, getEmployee } from '../services/AllApi';
import { BASE_URL } from '../services/baseUrl';

function EmployeeList() {

  const [allEmployeeData, setAllEmployeeData] = useState([])

  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const { id } = useParams

  useEffect(() => {

    getAllEmployees()

  }, [search, sortBy, sortOrder])

  // get all employee data
  const getAllEmployees = async () => {
    const response = await getEmployee(search)
    let sortedData = response.data;

    // Sorting logic based on selected criteria
    sortedData.sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc" ? a.f_Name.localeCompare(b.f_Name) : b.f_Name.localeCompare(a.f_Name);
      } else if (sortBy === "email") {
        return sortOrder === "asc" ? a.f_Email.localeCompare(b.f_Email) : b.f_Email.localeCompare(a.f_Email);
      } else if (sortBy === "date") {
        return sortOrder === "asc" ? new Date(a.f_Createdate) - new Date(b.f_Createdate) : new Date(b.f_Createdate) - new Date(a.f_Createdate);
      } else {
        return sortOrder === "asc" ? a.f_Id - b.f_Id : b.f_Id - a.f_Id;
      }
    });
    setAllEmployeeData(response.data)
  }

  // to delete employee
  const removeEmployee = async (id) => {
    const response = await deleteEmployee(id)

    if (response.status == 200) {
      getAllEmployees()
    } else {
      alert("Operation failed")
    }
  }

  const handleSortChange = (e) => {
    const { value } = e.target;
    setSortBy(value);
  };

  const handleOrderChange = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };


  return (
    <div>

      <NavBar />

      <div className='pt-10 px-5'>
        <p>Total Count : {allEmployeeData.length}</p>
      </div>

      <div className='flex justify-between px-5 pt-10'>
        <div className="flex">
          <div>
            <input onChange={e => setSearch(e.target.value)} className="border border-black text-gray-900 sm:text-sm focus:border-primary-600 block p-2.5 w-56"
              placeholder="Search by name" />
          </div>
          <div>
            <select onChange={handleSortChange} className="border border-black text-gray-900 sm:text-sm w-full p-2.5">
              <option disabled selected>Sort by</option>
              <option value="id">Id</option>
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="date">Date</option>
            </select>
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
            {
              allEmployeeData.length > 0 ?

                allEmployeeData.map((item, index) => (

                  <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell>{item.f_Id}</TableCell>
                    <TableCell>
                      <img className="w-10 h-10 rounded-full" src={`${BASE_URL}/uploads/${item.f_Image}`} />
                    </TableCell>
                    <TableCell>{item.f_Name}</TableCell>
                    <TableCell>{item.f_Email}</TableCell>
                    <TableCell>{item.f_Mobile}</TableCell>
                    <TableCell>{item.f_Designation}</TableCell>
                    <TableCell>{item.f_Gender}</TableCell>
                    <TableCell>{item.f_Course}</TableCell>
                    <TableCell>{new Date(item.f_Createdate).toLocaleDateString()}</TableCell>
                    <TableCell className='flex gap-3 pt-6'>
                      <Link to={`/edit-employee/${item._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                      </Link>
                      -
                      <a onClick={() => removeEmployee(item._id)} className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                        Delete
                      </a>
                    </TableCell>
                  </TableRow>

                )) :
                <TableRow className='w-100 mt-5 text-danger'>Nothing to display</TableRow>
            }
          </TableBody>
        </Table>
      </div>

    </div>
  )
}

export default EmployeeList
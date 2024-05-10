import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import EmployeeList from './components/EmployeeList'
import CreateEmployee from './components/CreateEmployee'
import EditEmployee from './components/EditEmployee'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/employee-list' element={<EmployeeList/>}/>
        <Route path='/create-employee' element={<CreateEmployee/>}/>
        <Route path='/edit-employee/:id' element={<EditEmployee/>}/>
      </Routes>
    </>
  )
}

export default App

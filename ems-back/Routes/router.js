// import express
const express=require('express')

const userController=require('../Controller/userController')

const employeeController=require('../Controller/employeeController')

const multerConfig=require('../Middleware/multermiddleware')

const router=new express.Router()

// login
router.get('/login',userController.login)

// add employee
router.post('/add',multerConfig.single("f_Image"),employeeController.addEmployee)

// get employees
router.get('/get-employees',employeeController.getAllEmployees)

// delete employee
router.delete('/delete-employee/:id',employeeController.deleteEmployee)

// edit employee
router.put('/edit-employee/edit/:id',multerConfig.single("f_Image"),employeeController.editEmployee)

module.exports=router
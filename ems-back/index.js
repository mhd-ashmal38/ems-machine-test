// import dotenv
require('dotenv').config()

// import database connection
require('./DB-Connection/connection')

// import express for creating server
const express=require('express')

// import router
const router=require('./Routes/router')

// import cors
const cors=require('cors')

// create server
const emsServer=express()

// use cors in server 
emsServer.use(cors())

// use parser in server
emsServer.use(express.json())

// use route
emsServer.use(router)

emsServer.use('/uploads',express.static('./uploads'))

// set port
const PORT=4000||process.env.PORT

// run server 
emsServer.listen(PORT,()=>{
    console.log(`ems server started at port ${PORT}`);
})
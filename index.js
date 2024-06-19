const { app } = require("./src/app.js")
const {connectDB} = require("./src/db/index.js")
const auth = require('./src/file/auth.forward.js')
const express = require("express")
const apps = express()
const dotenv = require("dotenv")
dotenv.config()

connectDB()
    .then(() => {
        // console.log("connected !!");
    })
    .catch((err) => {
        console.log('MONGO db connection failed !!!', err);
    })

    apps.get("/",(req,res)=>{
        res.status(200).json({
            name:"vishal",
            class:12,
            roll:"2ADDHDH&^&"
        })
    })
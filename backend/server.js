require('dotenv').config()
const {connect} = require('./database/dbconfig')
const express = require("express")
const cors = require('cors')
const router = require("./routes")

// database connect function
connect()


// express and middlwares
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

const port = process.env.PORT || 8000

app.listen(port,()=>{
  console.log("Hello this is node js");
})
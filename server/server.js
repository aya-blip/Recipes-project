const express = require('express')
const mongoose  = require('mongoose')
require('dotenv').config({path:'config/.env'})


const app=express()
app.use(express.json())

mongoose.connect(process.env.DB_URI, {useCreateIndex:true,useFindAndModify:false, useUnifiedTopology: true, useNewUrlParser: true },(err)=>{
    if(err)
      throw err

    console.log('database Connected ...')
})


app.use('/api',require('./routers/recipe'));
app.use('/register',require('./routers/register'));
app.use('/login',require('./routers/login'));

app.listen(5000,()=>{
    console.log('connected ...')
})

  
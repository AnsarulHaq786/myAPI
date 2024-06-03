require('dotenv').config();
const express = require('express'); // import express from express
const app= express(); // create app instance (express application)
const port = process.env.port || 5000;
const productsRoute= require('./routes/products');
const connectDB =require('./db/connect');

app.get('/',(req,res)=>{
    res.send("You searched for this url and i appear as the response from my creater");
});
app.use("/api/products",productsRoute);

const start = async()=>{
   try{
    await connectDB(process.env.MONGODB_URL);
    app.listen(port,"127.0.0.1",()=>{
        console.log(`Server is running on port ${port}`);
    });
   } catch(error){
    console.log(error.message);
   }
};

start();
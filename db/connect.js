const mongoose= require('mongoose');

const connectDB= (uri)=>{
    console.log("database connection established!");
    return mongoose.connect(uri);
};

module.exports= connectDB;
require("dotenv").config();
const connectDB = require("./db/connect");
const product = require("./models/product");
const productJson = require("./products.json");

const start = async()=>{
  try{
    await connectDB(process.env.MONGODB_URL);
    await product.deleteMany();
    await product.create(productJson);
    console.log("Sucessfully created product");
  }
  catch(err){
    console.log(err.message);
  } 
};
start();
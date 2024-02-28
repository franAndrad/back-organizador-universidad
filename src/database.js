import mongoose from "mongoose";

const url = process.env.MONGODB_URL; 
//  const url = "mongodb://localhost:27017";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('BD conectada')
})
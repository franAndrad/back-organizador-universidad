import mongoose from "mongoose";

const url = "mongodb+srv://franandrad:<password>@cluster1.qtkjl9k.mongodb.net/";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('BD conectada')
})
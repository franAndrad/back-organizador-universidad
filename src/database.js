import mongoose from "mongoose";

const url = "mongodb+srv://franandrad:15421-6529fa@cluster1.qtkjl9k.mongodb.net/";

mongoose.connect(url, {useNewUrlPaser: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('BD conectada')
})
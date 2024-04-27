const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("DB Connection Done successfully");
}).catch((err)=>{
    console.log(err.message);
})

const server = app.listen(port,()=>{
    console.log(`server started on port ${port}`)
});
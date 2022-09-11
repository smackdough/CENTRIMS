const express = require("express");
const app = express();


const mongoose = require ('./db/mongoose')
app.listen(3000, ()=>console.log("Hello Server Connected"));
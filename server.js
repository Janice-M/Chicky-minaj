const express = require("express");
const mongoose = require("mongoose");
const path = require ('path');
const 

const dbURI = config.get('dbURI');
const port = process.env.PORT || 4000;
Mongoose.connect(dbURI, {useNewUrlParser: true,
useUnifiedTopology: true, useCreateIndex:true })
    .then((result)=> application.listen(port))
    .catch((err) => console.log(err));
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();


app.use(express.static("Public"));
app.set("view engine", "ejs");




app.get("/", function(req, res){
    res.render("home")
})


app.listen(3000, function(err){
    if(!err){
        console.log("Server successfully running")
    }else{
        console.log(err);
    }
})
// const http = require ("http");

// const server = http.createServer((req,res) => {
//     res.end("<h1>Noise</h1>");
// });

// server.listen(5000,()=>{
//     console.log("server is working");
//     console.log("Ali Zain");
// });



// const express = require("express");
// const app = express();



import express from "express";
const app = express();

import path from 'path'
// express.static(path.join(path.resolve(), "public"));
app.use(express.static(path.join(path.resolve(), "public")));
// console.log(path.join(path.resolve(), "public"));
// //starting up view page
// app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("index.ejs");
    // res.sendFile("index");
});

app.listen(5000, () =>{
    console.log("My name is areeb ur rehmanm i am a web developer");
}); 

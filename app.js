const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

app.use(`/static`,express.static('static'));
app.use(express.urlencoded());


app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));

app.get("/",(req,res)=>{
    res.status(200).render("index.pug");
});
app.get("/contact",(req,res)=>{
    res.status(200).render("contact.pug");
});

app.listen(port, ()=>{
    console.log(`This application started at ${port}`);
});




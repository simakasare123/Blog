const express = require('express');
const bodyparser = require('body-parser');
const app = express();
// define route.js file bellow
const route =require('./api/route');

app.use('/' , route);


app.get('/' , function(req , res){

    res.send("sima kasare");
});

app.listen(9000,()=>{
    console.log("created");
});

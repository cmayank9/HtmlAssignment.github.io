const http= require('http');

const bodyparser=require('body-parser');
const routes=require('./Routes/Routes');

const express=require('express');
const app=express();


app.use(bodyparser.urlencoded({ extended: false })); 
app.use(routes);
        
app.listen(3000);

const express = require('express');
const fs=require('fs');
const router=express.Router();

router.use('/create',(req,res,next)=>{
    res.send('<form action="/add" method="POST"><input type="text" name="userName"><button type="submit">submit</submit></form>');
    });
    
    router.post('/add',(req,res,next)=>{
            let data=req.body;
            fs.appendFileSync('UserName.txt',data.userName+' ');
            res.statusCode=302;
            res.redirect('/user');
    });
    
    
    router.use('/user',(req,res,next)=>{
        fs.readFile('UserName.txt', 'utf8',(err,data)=>{
            if (err) {
              console.log(err);
             res.redirect('/create');
            }
        else{res.write('<Html>');
        res.write('<head><title>In User</title></head>');
        res.write(`<body><h1>${data}</h1></body>`);
        res.write('</Html>');
        }
        res.end();
          });
        });
    
    
    router.get('/',(req,res,next)=>{
    res.send('<h1>Greeting from Mayank!!</h1>');
    });

    module.exports=router;
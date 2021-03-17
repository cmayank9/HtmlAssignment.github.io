const express=require('express');
const app=express();
const expressHbs=require('express-handlebars');
const bodyparser=require('body-parser');


app.engine('hbs',expressHbs());
app.set('view engine', 'hbs');
app.set('views','views');

app.use(bodyparser({extended:false}));

const users=[];

app.get('/',(req,res,next)=>{

    res.render('home',{title:'HOME',layout: false});

});

app.get('/user',(req,res,next)=>{

    res.render('users',{title:'USERS',layout: false,users:users,hasUsers:users.length>0});
    
});

app.post('/adduser',(req,res,next)=>{
      users.push({name: req.body.username});
      res.redirect('/user');
        
});

app.listen(3000);
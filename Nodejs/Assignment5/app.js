const express=require('express');
const app=express();
const expressHbs=require('express-handlebars');
const bodyparser=require('body-parser');


app.engine('hbs',expressHbs());
app.set('view engine', 'hbs');
app.set('views','views');

app.use(bodyparser({extended:false}));

const routes=require('./Routes/Routes');

app.use(routes);

app.listen(3000);
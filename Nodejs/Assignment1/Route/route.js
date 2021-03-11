
const fs=require('fs');
const reqhandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/create'){
        res.write('<Html>');
        res.write('<head><title></title></head>');
        res.write('<body><form action="/add" method="POST"><input type="text" name="userName"><button type="submit">submit</submit></form></body>');
        res.write('</Html>');
        return res.end();
    }
    if(url==='/add'&&method==='POST'){
        const body=[];
        req.on('data',chunk=>{
        body.push(chunk);
        });
        req.on('end',()=>{
        const parsebody=Buffer.concat(body).toString();
        const name=parsebody.split('=')[1]+' , ';
        fs.appendFileSync('UserName.txt',name);
        });
        res.statusCode=302;
        res.setHeader('Location','/create');
        return res.end();
    }
    if(url==='/user'){
    
        fs.readFile('UserName.txt', 'utf8',(err,data)=>{
          if (err) {
            console.log(err);
            res.write('/');
            // console.log(window.toString());
            // (function () {
            //     Window.location = "https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_expression_self";
            //   })();
            //location.replace("http://www.google.com");
          }
    else{res.write('<Html>');
    res.write('<head><title>In User</title></head>');
    res.write(`<body><h1>${data}</h1></body>`);
    res.write('</Html>');
        console.log(data);
    }
    return res.end();  
        });
        
    }
    
    if(url==='/'){
        res.write('<Html>');
        res.write('<head><title></title></head>');
        res.write('<body><h1>Greetings from Mayank</h1></body>');
        res.write('<Html>');
        return res.end();
    }
    
    };
    
module.exports=reqhandler;
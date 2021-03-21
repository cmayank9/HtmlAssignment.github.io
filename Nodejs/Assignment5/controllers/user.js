const db=require("../util/database");

exports.HomePage=(req,res,next)=>{

    res.render('home',{title:'HOME',layout: false});

};

exports.CreateUser=(req,res,next)=>{

    res.render('create',{title:'CREATE',layout: false});

};

exports.AddUser=(req,res,next)=>{
    db.execute('INSERT INTO users (UserName) VALUES (?)',
    [req.body.username]
    ).then(()=>{
        res.redirect('/user');
    }).catch(err=>console.log(err));
        
};

exports.ShowUsers=(req,res,next)=>{
    db.execute('SELECT * FROM users')
    .then(([row])=>{
        res.render('users',{title:'USERS',layout: false,users:row,hasUsers:row.length>0});
    })
    .catch(err=>{
    res.send('<h1>No User Found<h1>');
    console.log(err);
    });
};


exports.page404=(req,res,next)=>{
    res.render('404',{title:'404 Error',layout: false});
};
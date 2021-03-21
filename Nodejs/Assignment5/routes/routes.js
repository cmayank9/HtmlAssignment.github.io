
const express = require('express');
const router=express.Router();

const userController=require('../controllers/user');
const errController=require('../controllers/404');

router.get('/',userController.HomePage);

router.get('/create',userController.CreateUser);

router.get('/user',userController.ShowUsers);

router.post('/adduser',userController.AddUser);

router.use(errController.page404);

module.exports=router;
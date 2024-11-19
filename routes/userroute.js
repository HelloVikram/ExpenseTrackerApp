const express=require('express');
const router=express.Router();


const controllerRoute=require('../controllers/usercontroller');

 router.get('/user/get-expense',controllerRoute.getData);
 router.post('/user/add-expense',controllerRoute.postData);
 router.delete('/user/delete-expense/:id',controllerRoute.deleteData);


module.exports=router;
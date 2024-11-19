const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
const cors=require('cors');
app.use(cors());

const userRoute=require('./routes/userroute');
app.use(userRoute);

const data=require('./Models/data');


data.sync()
.then(res=>{
    console.log(res);
    app.listen(3000,()=>{
        console.log('Server is listening at port 3000...');
    });
}).catch(err=>console.log(err));

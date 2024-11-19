
const data=require('../Models/data');


const getData=async (req,res,next)=>{
    try{
      const result=await data.findAll();
      console.log("Data fetched Successfully...");
      res.status(200).json({allexpense:result});
    }catch(err){
      res.status(500).json({error:err});
    }
      
   }
   const postData=async (req,res,next)=>{
    const amount=req.body.amount;
    const description=req.body.description;
    const category=req.body.category;
    
    try{
        const result= await data.create({
            amount:amount,
            description:description,
            category:category
        });
        console.log("Database Created Successfully....");
         res.status(201).json({expense:result});
    }catch(err){
        console.log("ERROR in creating database...");
        res.status(500).json({error:err});
    }
    }
    const deleteData=async (req,res,next)=>{
    
        try{
            if(!req.params.id){
                res.status(400).json({err:'ID IS INVALID'})
            }
          const uid=req.params.id;
          await data.destroy({where:{id:uid}});
          res.sendStatus(200);
          }catch(err){
            console.log(err);
            res.send(400).json({err:err});
          }
     }
     module.exports={getData,postData,deleteData};
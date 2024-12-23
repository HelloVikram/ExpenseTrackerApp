const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const expensetable=sequelize.define('expensetable',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
       type:Sequelize.STRING,
       allowNull:false 
    }
})
module.exports=expensetable;
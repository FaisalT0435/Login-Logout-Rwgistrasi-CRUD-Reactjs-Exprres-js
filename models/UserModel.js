import { Sequelize, STRING } from "sequelize";
import db from "../config/db.js";

const { DataTypes} = Sequelize;

const Users = db.define('user', {
    name:{
        type: DataTypes.STRING
    }, 
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default Users;
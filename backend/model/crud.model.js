import mongoose from "mongoose";

const crudSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    address:String,
})
const crudModel=mongoose.model("crud",crudSchema)
export default crudModel;
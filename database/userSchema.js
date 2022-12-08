import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})

const userModel = mongoose.models.user_tb || mongoose.model("user_tb",userSchema)
export default userModel;    
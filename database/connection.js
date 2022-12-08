import mongoose from 'mongoose'
const URI =process.env.MONGO_URI

let connection = async ()=>{
   await mongoose.connect(URI,(err)=>{
    if(err){
        console.log(err)
        console.log(`mongoose isn't connected`) 
    }
    else{
        console.log(`moogoose is connected`) 
    }
})}
export default connection;
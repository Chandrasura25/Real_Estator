import connection from "../../database/connection";
import userModel from "../../database/userSchema";
connection();

export default  function handler(req,res){
    // console.log(req.method);
    if(req.method=='GET'){
        res.send("hello, welcome")
    }
    else if(req.method=='POST'){
        let form = new userModel(req.body);
        form.save((err)=>{
            if(err){
                console.log(err)
            }
            else{
                res.send('Sign up successful')
            }
        })
    }
}
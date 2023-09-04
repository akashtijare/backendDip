const {Router} = require ("express");
const { UserModel } = require("../config/db");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

const userRouter  = Router();

userRouter.post("/signup", async (req, res) => {
    const {email, password, name} = req.body;
    const is_user = await UserModel.findOne({email : email})
    if(is_user){
        res.send({msg : "Email already exists"})
    }
    bcrypt.hash(password, 5, async function(err, hash) {
        const new_user = new UserModel({
            email,
            password : hash,
            name,
        })
        await new_user.save()
        res.send({msg : "Sign up successfull"})
    });
})

userRouter.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const is_user = await UserModel.findOne({email})
    if(is_user){
        const hashPassword = is_user.password
        bcrypt.compare(password, hashPassword, function(err, result) {
            if(result){
                const token = jwt.sign({userID : is_user._id}, akash)
                res.send({msg : "Login successfull", token : token})
            }
            else{
                res.send("Login failed")
            }
        });
    }
    else{
        res.send("Sign up first")
    }
})

module.exports ={
    userRouter
}
// kJ9V3wVBI4VLuyxg  npm install mongodb

const express =  require("express");
const { connection } = require("mongoose");
const { userRouter } = require("./Routers/user.router");
const { blogRouter } = require("./Routers/blog.router");
const { authentication } = require("./middleware/Authentication");
const cors = require("cors")



const app = express();



app.use(express.json())
app.use(cors({
    origin : "*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send({message:"base url"})
})

app.use("",userRouter)
app.use(authentication)

app.use("",blogRouter)


app.listen(8080, async()=>{


    try {
        await connection
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
    console.log("listening")
})
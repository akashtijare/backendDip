const express = require("express");

const { BlogModel } = require("../config/db");

const blogRouter =  express.Router()


=

app.get("/blogs", async (req, res) => {
    try{
        const blogs = await BlogModel.find()
        res.send(blogs)
    }
    catch(err){
        console.log(err)
        res.send({msg : "something went wrong, please try again later"})
    }
})



app.post("/blogs/add", authentication , async (req, res) => {
    const {title, Author, Content , category} = req.body;
    const userID = req.userID
    const new_blog = new BlogModel({
        title,
        category,
        Author,
        Content,
        user_id : userID
    })
    try{
        await new_blog.save()
        return res.send({msg : "Blog successfully added"})
    }
    catch(err){
        console.log(err)
        res.send({msg : "something went wrong"})
    }
})



app.get("/blogs/filter", async (req, res) => {
    const { Author, category } = req.query;
    const filter = {};
  
    if (Author) {
      filter.Author = Author;
    }
  
    if (category) {
      filter.category = category;
    }
  
    try {
      const blogs = await BlogModel.find(filter);
      res.status(200).json(blogs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Internal server error" });
    }
  });


app.listen(8080, async () => {
    try{
        await connection
        console.log("connected to db successfully")
    }
    catch(err){
        console.log("error while connecting to DB")
        console.log(err)
    }
    console.log("listening on port 8080")
})


module.exports={blogRouter}
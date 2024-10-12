 const express = require('express');
 const path =require('path');
 const app=express();
 
 const port=process.env.PORT ||4000
 //piblic static path

 

 
 console.log(path.join(_dirname,".."));
 
// app.use(express.static());
 app.get("",(req, res) =>{
    res.send("welcome to my weather project")});

    app.get("/about", (req, res) =>{
        res.send("welcome to MNNIT ALLAHABAD")});

        app.get("/weather", (req, res) =>{
            res.send("this is my weather channel")});

            app.get("*", (req, res) =>{
                res.send("404 error page opps...")});
                
            
 
    app.listen(port, () => {
        console.log(`Listening to the  port at ${port}`);
    });
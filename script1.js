console.log("ola mundo")
const express = require("express");
const app = express();

app.get("/ola",(req,res) => {
   res.json({Hello:"World"})
})

app.listen(3030,() =>{
    console.log("rodando")
})
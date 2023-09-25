const express = require("express")
const {PrismaClient}= require("@prisma/client")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")
const {reateTokens, createTokens}=require("./JWT")

const app= express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cookieParser())

app.post("/registrar",async(req, res)=>{
  const {nome, senha}= req.body
  await bcrypt.hash(senha,10).then((hash)=>{
    prisma.usuario.create({
    data:{
    nome,
    senha: hash
    }
    }).then(()=>{
    res.json("Usuario criado")
    }).catch ( (err)=>{
    res.json({err:"algo deu errado"})
    })
  })
  res.json("criou")
  

})

app.post("/login",async(req, res)=>{
   const {nome,senha}=req.body
   const usuario = await prisma.usuario.findFirst({
    where:{nome}
   })
   if(!usuario){
    res.status(404).json({error:"usuario não existe"})
   }
   const psenha = usuario.senha
   bcrypt.compare(senha, psenha).then((Match)=>{
   if(!match){
    res.json({error:"Senha incorreta"})
   }else{
    const acessToken = createTokens(usuario)
    res.cookie("acess-token",acessToken,{
        httpOnly:false
    })
    res.json("Logged in")
   }
   })
})

app.get("/perfil",async(req, res)=>{
    res.json("entrou no perfil")
})
app.post("/login",async(req, res)=>{
   const {nome,senha}=req.body
   const usuario = await prisma.usuario.findFirst({
    where:{nome}
   })
   if(!usuario){
    res.status(404).json({error:"usuario não existe"})
   }
   const psenha = usuario.senha
   bcrypt.compare(senha, psenha).then((Match)=>{
   if(!match){
    res.json({error:"Senha incorreta"})
   }else{
    const acessToken = createTokens(usuario)
    res.cookie("acess-token",acessToken,{
        httpOnly:false
    })
    res.json("Logged in")
   }
   })
})

app.get("/perfil",async(req, res)=>{
    res.json("entrou no perfil")
})

app.listen(8080,()=>{
    console.log("Rodando na porta 8080")
})

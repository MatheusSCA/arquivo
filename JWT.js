const {sign,verify} = require("jsonwebtoken")
const createTokens = (usuario)=>{
    const acessToken = sign({nome: usuario.nome,id:usuario.id },
    "jwtsecret")

    return acessToken
}

const validadeToken =(req,res,next)=>{
    const acessToken = req.cookies[acess-token]
    if(!acessToken) return res.status(404).json("algo deu errado")

    try{
        const validToken = verify(acessToken,"jwtsecret")
        if(validToken){
            req.autenticated = true
            return next
        }
    }catch(err){
    return res.status(404).json("erro")
    }
}
module.exports ={createTokens,validadeToken}
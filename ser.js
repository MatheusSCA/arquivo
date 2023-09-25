const{ Router }=require("express")
const server = require("./server")
const router = Router()

router.post("/registrar", server.registrar)


module.exports={router}
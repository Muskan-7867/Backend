// express js manages eveything from receiving the request and giving  the response

const express =  require("express")
const app = express();

app.get("/",function(req,res){
    res.send("hlo world ")
})

app.get("/profile",function(req,res){
    res.send("hlo world profile")
})

app.listen(3000)


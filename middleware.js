//middleware--jab bhi server request accept krta hai vha se route ke beech  phonchne tk agr app us request ko bech 
//me rokte ho or kuj perform krte ho

const express =  require("express")
const app = express();

app.use(function(req,res,next){
    console.log("middleware dn");
    next();
})

app.get("/",function(req,res){
    res.send("hlo world ")
})



app.listen(3000)
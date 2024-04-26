const express = require('express');
const app = express();
const userModel = require('./usermodel')

app.get('/', (req,res)=> {
    res.send("hey")
})

app.get('/create', async  (req,res) => {
    let User = await userModel.create({
        name: "depk",
        username: "musudepk",
        email: "musudepk@gmail.com",
})

     res.send(User);

})

app.get('/update', async  (req,res) => {
let updateduser = await userModel.findOneAndUpdate({username:"musu"}, {name:"plkk"},{new:true})
res.send(updateduser)
})


app.get('/read', async  (req,res) => {
    let readuser = await userModel.find({username:"musu"});
    res.send(readuser);
})

app.listen(3000);
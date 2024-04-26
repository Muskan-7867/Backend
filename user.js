const express = require('express');
const app = express();
const userModel = require('./usermodel')

app.get('/', (req,res)=> {
    res.send("hey")
})

app.get('/create', async  (req,res) => {
    let User = await userModel.create({
        name: "muskan",
        username: "musu",
        email: "musu@gmail.com",
})

     res.send(User);

})

app.get('/update', async  (req,res) => {
let updateduser = await userModel.findOneAndUpdate({username:"musu"}, {name:"plkk"},{new:true})
res.send(updateduser)
})


app.listen(3000);
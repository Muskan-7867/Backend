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

app.listen(3000);
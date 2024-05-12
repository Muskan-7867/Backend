const express = require("express");
const app = express();
const path = require('path');
const userModel = require("./Model/User");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", 'ejs');

app.get("/", (req, res) => {
    res.render("app");
});

app.get("/read", async (req, res) => {
    // let allusers = await userModel.find()
    res.render("read");
});

app.post("/create", async (req, res) => {
    try {
        const { name, email, image } = req.body;
        console.log("body data1",name,email,image);
        const newUser = new userModel({
            name: name,
            email: email,
            image: image
        });

        const createdUser = await newUser.save()
        console.log("User created:", createdUser);
        res.send(createdUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Error creating user");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

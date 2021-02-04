const express = require("express");
const User = require("../model/user")
const router = express.Router();

let errors = []

router.get("/register", (req, res) => {
    res.render("register.ejs", {errors})
})

router.post("/register", async (req, res) => {

    if(!req.body.name) {
        errors.push("Name is required")
    }

    if(!req.body.password) {
        errors.push("Password is required")
    }

    if(!req.body.name || !req.body.password) {
        res.render("register.ejs", {errors})
    }

    const newUser =  await new User(
        {name: req.body.name, 
        password: req.body.password})
        .save()

    res.redirect("/")
})

router.get("/login", (req, res) => {
    res.render("login.ejs")
})

router.post("/login" , async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const userName = await User.find({name: name});
    const userPassword = await User.find({password: password});
    if(userName[0].name === name && userPassword[0].password === password) {
        res.send("Welcome!") 
    };
    res.send("Please try again");
})

module.exports = router;
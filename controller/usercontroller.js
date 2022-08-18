const express = require("express");

const router = express.Router()

const User = require("../model/usermodel")

router.get("/", async(req,res) => {
    console.log(req.body);
    try {
        const user = await User.find().lean().exec()
        console.log(user);
        return res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
})

router.post("/register", async(req,res) => {
    try {
        const use = await User.create(req.body)
        console.log(use);
        return res.status(201).send(use)
    } catch (error) {
        console.log(error);
    }
})

router.patch("/user/:id", async(req,res) => {
    try {
        const id = req.params.id
        const updatedata = req.body
        const use = await User.findByIdAndUpdate(id,updatedata)
        res.send(use)
    } catch (error) {
        console.log(error);
    }
})

router.delete("/user/:id", async(req,res) => {
    const id = req.params.id
    const use = await User.findByIdAndDelete(id)
    res.send(use)
})


module.exports = router
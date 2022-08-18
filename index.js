const express = require("express");

const app = express()

const connect = require("./config/db")

const controller = require("./controller/usercontroller")


app.use(express.json())

app.get("/",controller)
app.post("/register",controller)
app.patch("/user/:id",controller)
app.delete("/user/:id",controller)



app.listen(1000 ,async() => {
    await connect()
    console.log("Your Sever Running Sucessfully on Port 1000 😊");
})
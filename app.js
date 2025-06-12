// This is NodeJs Learning.

const app = require("express")()

app.get("/", (req, res) => {
    // res.send("Hello I am from home page.")
    res.json({
        name: "Sujan Thapa",
        age: 21
    })
})

app.get("/contact", (req, res) =>{
    res.send("I am from contact page.")
} )

app.get("/about", (req, res) => {
    console.log("I am from about page.")
    res.send("I am from about page.")
})

app.listen(3000, (req, res)=>{
    console.log("Server is running on port 3000")
})


const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const markDownRoutes = require("./routes/markdown")
const errHandler = require("./handler/error")
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.use("/api/v1",markDownRoutes)


app.get("/",(req,res) => (
    res.json({
        message:"hello world"
    })
))

app.use(errHandler)

app.listen(PORT,() => {
    console.log(`Listening on PORT ${PORT}`)
})
require('dotenv').config();
const mongoose = require('mongoose')
mongoose.set('debug',true)
mongoose.Promise = Promise

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/markdownv0"

mongoose.connect(MONGO_URI,{
    keepAlive:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

module.exports.Markdown = require("./Markdown")
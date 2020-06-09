const mongoose = require("mongoose")


const markdownSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    markdown:{
        type:String,
        required:true
    },
    content:{
        type:String
    }
},{
    timestamps:true
})


const Markdown = mongoose.model('Markdown',markdownSchema)

module.exports = Markdown
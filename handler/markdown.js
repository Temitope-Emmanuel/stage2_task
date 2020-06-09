const db = require("../model")
const markdown = require('markdown').markdown;

exports.createMarkdown = async function(req,res,next){
    try{
            const result = markdown.toHTML(req.body.content)
            const newMarkdown = await db.Markdown.create({
                title:req.body.title,
                content:result,
                markdown:req.body.content
            })
            await newMarkdown.save()
            const foundMarkdown = await db.Markdown.find({title:req.body.title})
            return res.status(200).json(foundMarkdown)
    }catch(err){
        if(err.code === 11000){
            err.message = "Title Already Exist Please Choose another title"
        }
        return next(err)
    }
}

exports.loadMarkdown = async function(req,res,next){
    try{
        const allMarkdown = await db.Markdown.find({})
        return res.status(200).json(allMarkdown)
    }catch(e){
        return next(e)
    }
}

exports.findMarkdown = async function(req,res,next){
    console.log("reaching the find markdown routes")
    try{
        const foundMarkdown = await db.Markdown.find({title:req.params.titleId})
        return res.status(200).json(foundMarkdown)
    }catch(e){
        return next(e)
    }
}

exports.updateMarkdown = async function(req,res,next){
    
    try{
        const result = markdown.toHTML(req.body.content)
        const payload = {content:result,markdown:req.body.content}
        const updatedMarkdown = await db.Markdown.updateOne({title:req.params.title},{$set:{...payload}})
    }
}
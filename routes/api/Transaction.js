const router=require('express').Router()
const { json } = require('express')
const Post=require('../../models/Post')
const { verifyToken } = require('./verifyToken')

router.get('/',(req,res)=>{
    Post.find((err,docs)=>{
        if(err) console.log(err)
        res.json(docs)
    })
})

router.post('/add',async(req,res)=>{
    
        const details=  new Post(req.body)
        details.save((err,docs)=>{
            if(err) console.log(err)
            res.json(docs)
        })
     
    })
module.exports=router;
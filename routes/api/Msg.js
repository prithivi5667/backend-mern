




const router=require('express').Router()
const { json } = require('express')
const Msg=require('../../models/request')
const { verifyToken } = require('./verifyToken')



router.get('/',(req,res)=>{
    Msg.find((err,docs)=>{
        if(err) console.log(err)
        res.json(docs)
    })
})

router.post('/add',verifyToken,async(req,res)=>{
    
        const details=  new Msg(req.body)
        details.save((err,docs)=>{
            if(err) console.log(err)
            res.json(docs)
        })
     
    })
module.exports=router;
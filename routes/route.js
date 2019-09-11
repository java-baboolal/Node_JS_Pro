const express=require("express");
const router=express.Router();
const Contact=require("../models/contact")

router.get('/contact',(req,res)=>{
    Contact.find(function(err,contacts){
        res.json(contacts)
    })
    res.send("retriving the contacct list");
});
router.post('/addcontact',(req,res)=>{
    let newcontact=Contact({firstname:req.body.firstname,
    lastname:req.body.lastname,phone:req.body.phone});
    newcontact.save((err,contact)=>{
        if(err){
            res.json({msg:"Failed to add contact"})
        }
        res.json({msg:"added contact"})
    })
})
router.delete('/contact/id',(req,res)=>{
   Contact.remove({id:req.params.id},(err,result)=>{
       if(err){
           res.json({msg:"no id found"})
       }res.json(result)
   })
});
module.exports=router;
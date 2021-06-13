const express=require('express')
const router = express.Router()
const RecipeModel= require('../models/Recipe')
const authMiddleware = require ('../helpers/authMiddleware')

router.post('/recipe',(req,res)=>{
    let newRecipe = new RecipeModel({...req.body, owner:req.userId});
    newRecipe.save()
    .then(recipe=>res.status(201).send(recipe))
    .catch(err=>res.status(500).send({msg:"server error"}));


})

router.get('/recipe',(req,res)=>{
    RecipeModel.find()
    .then(recipes=>res.status(200).json(recipes))
    .catch(err=>res.status(400).json({errors:[{msg:err}]})) 
})

router.delete('/recipe/:id',(req,res)=>{
    console.log('deleting')
    RecipeModel.findByIdAndDelete(req.params.id)
    .then(recipe=>res.status(200).json(recipe))
    .catch(err=>res.status(400).json({errors:[{msg:err}]}))
})

router.put('/recipe/:id',(req,res)=>{
    
    RecipeModel.findByIdAndUpdate(req.params.id,req.body)
    .then(recipe=>res.status(200).json(recipe))
    .catch((err)=>res.status(400).json({errors:[{msg:err}]}))
})

module.exports=router
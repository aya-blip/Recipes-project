const mongoose=require('mongoose');


const recipeSchema= new mongoose.Schema({
    recipe:String,
    description:{
        type:String
    },
    owner:{
   type:mongoose.Types.ObjectId,
   ref:"user"
    },
    ingredients:{
        type:String,
        
    },
    preparation:{
        type:String,
        
    },
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    }


})
module.exports= mongoose.model('recipe',recipeSchema)
const User =require ('../models/User');
const jwt = require ('jsonwebtoken');
//inscription  d'un nouvel utilisateur 
exports.registerUser=async(req,res)=>{
    const{username,paasword}=req.body;
    try{
        const newUser=new User({username,password});
        await newUser.save();
        res.status(201).json({message:'Utilisateur créé avec succés'});
    }catch(error){
        res.status(400).json({message:error.message});
    }
};
//connexion d'un utlisateur existant
exports.loginUser=async(req,res)=>{
    const{ username,password}=req.body;
}
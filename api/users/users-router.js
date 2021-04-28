const express = require("express");
const Users = require("./users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secrets");
const router = express.Router();
 
//[GET] All Users
 
router.get("/", (req, res, next)=>{
    Users.getAllUsers()
    .then((allUsers)=>{
        res.status(200).json(allUsers);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })
})
 
 
//[POST] Registration
 
router.post('/register', (req, res, next) => {
  
    const User = req.body;
  
    const rounds = process.env.BCRYPT_ROUNDS || 8;
  
    const hash = bcrypt.hashSync(User.Password, rounds);
  
    User.Password = hash;
  
    if(User.Username && User.Password){
      if (Users.getByUsername(User.Username) === true){
        res.status(406).json({message: "Username taken"});
      } else {
        Users.createRegistration(User)
        .then((newUser)=>{
          console.log(newUser);
          res.status(200).json(newUser);
        })
        .catch((err)=>{
          res.status(500).json({message: err.message})
        })
      
      }
    } else {
      res.status(406).json({message: "Username and password required"})
    }
  
  });
  
//[POST] LOGIN
 
  router.post('/login', (req, res, next) => {
    
    let { Username, Password } = req.body;
  
    if(Username && Password){
      Users.getByUsername(Username)
      .then(([userLoggingIn])=>{
          console.log(userLoggingIn)
        if(userLoggingIn && bcrypt.compareSync(Password, userLoggingIn.Password)){
          
          const token = buildToken(userLoggingIn);
          
          res.status(200).json({message: `welcome, ${userLoggingIn.Username}`, token});
    
        } else {
          res.status(401).json({message: "Invalid credentials"})
        }
      })
      .catch((err)=>{
        res.status(500).json({message: err.message});
      })
    } else {
      res.status(406).json({message: "username and password required"});
    }
  
  });
  
  //TOKEN MAKING CODE
  
  function buildToken(userLoggingIn){
    const payload = {
      subject: userLoggingIn.id,
      Username: userLoggingIn.username,
      Role: userLoggingIn.role
    }
    const config = {
      expiresIn: "1d"
    }
    return jwt.sign(payload, jwtSecret, config)
  }
  
  //EXPORTS
  
  module.exports = router;
  

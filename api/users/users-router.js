const express = require("express");
const Users = require("./users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secrets");
const router = express.Router();

//[POST] Registration

router.post('/register', (req, res) => {
  
    const user = req.body;
  
    const rounds = process.env.BCRYPT_ROUNDS || 8;
  
    const hash = bcrypt.hashSync(user.password, rounds);
  
    user.password = hash;
  
    if(user.username && user.password){
      if (Users.getByUsername(user.username) === true){
        res.status(406).json({message: "username taken"});
      } else {
        Users.createRegistration(user)
        .then((newUser)=>{
          console.log(newUser);
          res.status(200).json(newUser);
        })
        .catch((err)=>{
          res.status(500).json({message: err.message})
        })
      
      }
    } else {
      res.status(406).json({message: "username and password required"})
    }
  
  });
  
//[POST] LOGIN

  router.post('/login', (req, res) => {
    
    let { username, password } = req.body;
  
    if(username && password){
      Users.getByUsername(username)
      .then(([userLoggingIn])=>{
        if(userLoggingIn && bcrypt.compareSync(password, userLoggingIn.password)){
          
          const token = buildToken(userLoggingIn);
          
          res.status(200).json({message: `welcome, ${userLoggingIn.username}`, token});
    
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
      username: userLoggingIn.username,
    }
    const config = {
      expiresIn: "1d"
    }
    return jwt.sign(payload, jwtSecret, config)
  }
  
  //EXPORTS
  
  module.exports = router;
  
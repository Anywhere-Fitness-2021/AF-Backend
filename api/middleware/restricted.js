const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secrets");

function restricted(req, res, next){

    const token = req.headers.authorization;

    if(token){
        jwt.verify(token, jwtSecret, (err, decoded)=>{
            if(!err){
                req.decodedToken = decoded;
                next();
            } else {
                res.status(401).json({message: "token invalid"});
            }
        })
    } else {
        res.status(401).json({message: "token required"});
    }
}

module.exports = restricted;
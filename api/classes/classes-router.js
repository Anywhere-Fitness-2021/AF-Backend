const express = require("express");
const Classes = require("./classes-model");

const router = express.Router();

//[GET] All Classes

router.get("/", (req, res, next)=>{
    Classes.getAllClasses()
    .then((allClasses)=>{
        res.status(200).json(allClasses);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })
})

//[GET] Class By Id

router.get("/:id", (req, res, next)=>{
    
})

//[PUT] / Update Class By ClassId

router.put("/:ClassId", (req, res, next)=>{
    
})

//[POST] New Class

router.post("/", (req, res, next)=>{
    
})

//[DELETE] Class By ClassId

router.delete("/:ClassId", (req, res, next)=>{
    
})

module.exports = router;
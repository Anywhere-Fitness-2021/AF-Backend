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

//[GET] Class By ClassId

router.get("/:ClassId", (req, res, next)=>{
    
const { ClassId } = req.params;

if(ClassId){
    Classes.getClassByClassId(ClassId)
    .then((specificClass)=>{
        res.status(200).json(specificClass);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })
} else {
    res.status(406).json({message: "Class Id Required"});
}

})

//[PUT] / Update Class By ClassId

router.put("/:ClassId", (req, res, next)=>{

    const updatedClass = req.body;

    if(updatedClass.ClassId && updatedClass.Name){
        if (typeof updatedClass.ClassId === "number"){
            Classes.updateClass(updatedClass)
            .then((update)=>{
                res.status(200).json(update);
            })
            .catch((err)=>{
                res.status(500).json({message: err.message});
            })
        } else {
            res.status(406).json({message: "ClassId must be a number"});
        }
    } else {
        res.status(406).json({message: "ClassId and Name are required"});
    }
    
})

//[POST] New Class

router.post("/", (req, res, next)=>{

    const newClass = req.body;

    if(newClass.ClassId && newClass.Name){
        if (typeof newClass.ClassId === "number"){
            Classes.addClass(newClass)
            .then((newestClass)=>{
                res.status(200).json(newestClass);
            })
            .catch((err)=>{
                res.status(500).json({message: err.message});
            })
        } else {
            res.status(406).json({message: "ClassId must be a number"});
        }
    } else {
        res.status(406).json({message: "ClassId and Name are required"});
    }


    
})

//[DELETE] Class By ClassId

router.delete("/:ClassId", (req, res, next)=>{
    
    const { ClassId } = req.params;

    Classes.deleteClass(ClassId)
    .then((resolution)=>{
        res.status(200).json(resolution);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })

})

module.exports = router;
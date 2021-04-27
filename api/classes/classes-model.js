const db = require("../../dbconfig");

function getAllClasses(){
    return db("Classes")
}

function getClassById(ClassId){
    return db("Classes")
            .where("ClassId", ClassId)
}

function updateClass(UpdatedClass){

    return db("Classes")
            .where("ClassId", UpdatedClass.ClassId)
            .update(UpdatedClass)
}

async function addClass(classToAdd){

    const classToAddId = await db("Classes")
                                .insert(classToAdd)
    
    return getClassById(classToAddId)
}

function deleteClass(ClassIdToDelete){
    
    db("Classes")
        .where("ClassId", ClassIdToDelete)
        .del()

    return getAllClasses();
}

module.exports = {
    getAllClasses, getClassById, updateClass, addClass, deleteClass
}
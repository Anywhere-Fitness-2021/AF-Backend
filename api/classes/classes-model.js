const db = require("../../dbconfig");

function getAllClasses(){
    return db("Classes")
}

function getClassByClassId(ClassId){
    return db("Classes")
            .where("ClassId", ClassId)
}

async function updateClass(UpdatedClass){

    await db("Classes")
            .where("ClassId", UpdatedClass.ClassId)
            .update(UpdatedClass)

    return getClassByClassId(UpdatedClass.ClassId);

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
    getAllClasses, getClassByClassId, updateClass, addClass, deleteClass
}
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

        await db("Classes")
            .insert(classToAdd)

            return getClassByClassId(classToAdd.ClassId)
    
    
}

async function deleteClass(ClassIdToDelete){
    
    await db("Classes")
        .where("ClassId", ClassIdToDelete)
        .del()

    return getAllClasses();
}

module.exports = {
    getAllClasses, getClassByClassId, updateClass, addClass, deleteClass
}
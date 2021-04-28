const db = require("../../dbconfig");
 
function getAllUsers(){
    return db("Users")
}
 
function getUserById(id){
    return db("Users")
            .where("id", id)
}
 
function getByUsername(username){
    return db("Users")
            .where("username", username)
}
 
async function createRegistration(user){
 
    const newUserId = await db("Users")
            .insert(user)
 
    return getUserById(newUserId)
}
 
module.exports = {
    getAllUsers, getUserById, getByUsername, createRegistration
}

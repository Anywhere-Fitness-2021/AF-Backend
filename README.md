# AF-Backend

This project utilizes node and express for backend development, as well as SQLITE3 and Knex for database creation and management.

Contained are 2 APIS, one for accessing and performing CRUD operations with Users, and another for accessing and performing CRUD operations with Classes.

What follows are how you can interact with the APIs and what you can expect.

//////////////////////
 
BASE URL: https://anywherefitness2021.herokuapp.com
 
CLASSES ENDPOINTS: /api/classes
 
[GET] All Classes
 
Send GET request to /api/classes

Returns:
-an array of objects, each object being a class.
 
[GET] Class By ClassId
 
Send GET request to /api/classes/:ClassId , passing through ClassId

Returns:
-an array containing one object, the object being the class you requested.
 
[PUT] / Update Class By ClassId
 
Send PUT request to /api/classes/:ClassId , passing through Updated Class
 
Requires:
-ClassId
-Name
 
Takes:
-ClassId
-Name
-Type
-StartTime
-Duration
-IntensityLevel
-Location
-Attendees
-MaxClassSize

Returns:
-Array containing an object, the object being the updated class

 
[POST] New Class
 
Send POST request to /api/classes/ , passing through new class
 
Requires:
-ClassId
-Name
 
Takes:
-ClassId
-Name
-Type
-StartTime
-Duration
-IntensityLevel
-Location
-Attendees
-MaxClassSize

Returns:
-An array containing an object, the object being the new class
 
[DELETE] Class By ClassId
 
Send DELETE request to /api/classes/:ClassId , passing through ClassId to be deleted

Returns:
-An array of objects, the objects being the remaining classes that weren't deleted

////////////////////

END CLASSES ENDPOINTS

////////////////////

////////////////////
 
START USERS ENDPOINTS 
 
BASE URL: https://anywherefitness2021.herokuapp.com
 
USERS ENDPOINTS: /api/users

[GET] All Users

Send GET request to /api/users

Returns:
-An array of objects, each object being a user
 
[POST] Registration Of New User
 
Send POST request to /api/users/register , passing in Username, Password, Role, first letter of property capitalized 
 
Requires:
-Username
-Password
-Role

Returns:
-Array containing one object, the object being the new User
 
[POST] Login Of User
 
Send POST request to /api/users/login , passing in Username, Password, first letter of property capitalized 
 
Requires:
-Username
-Password
 
Returns:
-An object containing a welcome message and a token

# AF-Backend
Node/Express/SQLite/Knex Backend For Unit 4
 
BASE URL: https://anywherefitness2021.herokuapp.com/
 
CLASSES ENDPOINTS:
 
/api/classes
 
[GET] All Classes
 
Send GET request to /api/classes
 
[GET] Class By ClassId
 
Send GET request to /api/classes/:ClassId , passing through ClassId
 
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
 
[DELETE] Class By ClassId
 
Send DELETE request to /api/classes/:ClassId , passing through ClassId to be deleted
 
END CLASSES ENDPOINTS
 
START USERS ENDPOINTS 
<<<<<<< HEAD
 
BASE URL: https://anywherefitness2021.herokuapp.com/
 
=======

BASE URL: https://anywherefitness2021.herokuapp.com/

>>>>>>> 2c4c06fdf3506c34fcb61b1ea48b38505a3b5e38
USERS ENDPOINTS:
 
/api/users
 
[POST] Registration Of New User
<<<<<<< HEAD
 
Send POST request to /api/users/register , passing in Username, Password, Role, first letter of property capitalized 
 
=======

Send POST request to /api/users/register , passing in Username, Password, Role, first letter of property capitalized 

>>>>>>> 2c4c06fdf3506c34fcb61b1ea48b38505a3b5e38
Requires:
-Username
-Password
-Role
<<<<<<< HEAD
 
[POST] Login Of User
 
Send POST request to /api/users/login , passing in Username, Password, first letter of property capitalized 
 
Requires:
-Username
-Password
 
 
=======

[POST] Login Of User

Send POST request to /api/users/login , passing in Username, Password, first letter of property capitalized 

Requires:
-Username
-Password


END USERS ENDPOINTS 
>>>>>>> 2c4c06fdf3506c34fcb61b1ea48b38505a3b5e38

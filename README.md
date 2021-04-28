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

BASE URL: https://anywherefitness2021.herokuapp.com/

USERS ENDPOINTS:

/api/users

[POST] Registration Of New User

Send POST request to /api/users/register , passing in Username, Password, Role, first letter of property capitalized 

Requires:
-Username
-Password
-Role

[POST] Login Of User

Send POST request to /api/users/login , passing in Username, Password, first letter of property capitalized 

Requires:
-Username
-Password


END USERS ENDPOINTS 
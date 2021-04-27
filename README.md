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

USERS ENDPOINTS:

/api/users

[POST] Registration Of New User

[POST] Login Of User


END USERS ENDPOINTS 
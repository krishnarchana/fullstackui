Java REST Service 
-----------------
1) Prerequisite
	a) Java 7/8
	b) Mysql : create a database with name "test"
	c) eclipse
	d) Tomcat 7 or 8 depending on java version
	

2) Completed 
	a) startup control
	b) properties files for loading app properties like db, user, pass
	c) log4j
	d) properties loading
	e) database testing
	
2) TODO
	a) add tables
	d) create classes for handling dao
	c) create services for
		i) login (token system)
		ii) edit (only admin)
		iii) list (user and admin)
	


Policy Service
-----------------------
1) GET http://localhost:8080/RESTfulExample/rest/policy/query?policyNo=1

2.1) (admin) USER: GET http://localhost:8080/PolicyManagerServer/rest/policy/query/user/<user_id>
Authorization: Basic <token>

// Get policies for the logged in user
2.2) (user)  GET http://localhost:8080/PolicyManagerServer/rest/policy/query
Authorization: Basic <token>

2.3) (admin) GET http://localhost:8080/PolicyManagerServer/rest/policy/<policy_no>
Authorization: Basic <token>

2.4)  (admin):  GET http://localhost:8080/PolicyManagerServer/rest/policy/all
Authorization: Basic <token>
Returns all the policies in the policy table

3) POST : http://localhost:8080/RESTfulExample/rest/policy/add
Content-Type: application/json
body: { "name":"Gopi Krishna","amount":100,"maturityDate":"2017-11-22","valid":true, "userId":1}





4) POST : http://localhost:8080/RESTfulExample/rest/policy/edit
Content-Type: application/json
body: {"policyNo":2, "name":"Gopi Krishna E","amount":45000,"maturityDate":"2017-12-22","valid":true, "userId":1}
--------------------------------------

User Service
--------------------------------
1) POST : add user
http://localhost:8080/RESTfulExample/rest/user/add
Content-Type: application/json
body: {"name_1":"Venkat","name_2":"rao","address":"bangalore","phone":"+910097777","email":"test@gmail.com","password":"hellotest","dob":"2017-11-11"}

Response Success : 
{
"userId": 4,
"login": "Venkat1230610"
}

response failure : 
{
	"errorCode": -1,
	"errorStr": "Adding failed"
}

Login already exists : 
{
	"errorCode": -3,
	"errorStr": "Login name already exists."
}

2) List users
GET : http://localhost:8080/RESTfulExample/rest/user/get?user_id=1	

Response Success : 
{
	"user_id": 1,
	"login": "admin",
	"name_1": "Administrator",
	"name_2": null,
	"address": "Bangalore",
	"phone": "+911234345",
	"email": "gopikrishna.e84@gmail.com",
	"password": "MTBfYmFuZ2Fsb3JlXzEw",
	"dob": "1984-02-03",
	"type": 1
}

Response Failed : (user_id < 1)
{
"errorCode": -5,
"errorStr": "Invalid user"
}

Response Failed : (user_id doesn't exists)
{
"errorCode": -4,
"errorStr": "User doesn't exists."
}

-------------
login 
POST : http://localhost:8080/PolicyManagerServer/rest/auth/login
Content-Type: application/json
body: {
  "username": "Admin",
  "password": "Admin"
}

response :
{
"userId": 1,
"token": "[B@2f55498a",
"name": "Administrator",
"login_time": 1510813529514
}

response : error : 401 status code



logout
========
GET http://localhost:8080/PolicyManagerServer/rest/auth/logout
Authorization: Basic token
 Ex : Authorization Basic W0JAM2U2MDNmYTA=
response
{
"success": "User logged out"
}


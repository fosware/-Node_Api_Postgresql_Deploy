# Node RestAPI PostgreSql deploy in Railway
REST API with Node/Express/PostgreSql Deploy in Railway


This is a simple REST API build with Nodejs/Express.
Storage in Postgresql DB and deploy in Railway


## Live and How to use:
[Deploy in Railway](https://nodeapipostgresqldeploy-production.up.railway.app/api/employees)


### Fields to use
```
id      -- id of employee
name    -- name of employee
salary  -- salary of epmloyee
```

## End points:
```
GET     /employees
GET     /employee/:id
POST    /employees {'name': name, 'salary': salary}
PATCH   /employee/:id {'name': name, 'salary': salary}
DELETE  /employee/:id
```
# Simple node api to compare two strings

This is a simple rest api to determine if a string is subset to another. 

## Requirements

- Node.js , npm , MongoDB

## Installation
* Clone this repository:
```
    $ git clone https://github.com/Ripon440/node-api-compare-string.git
```

```
    $ cd node-api-compare-string
```
* Install npm dependencies
```
    $ npm install
```

* start mongod service

* start the server
```
    $ npm start
```

# API Endpoints

```
GET  http://localhost:3000/
POST http://localhost:3000/add
GET  http://localhost:3000/list
```

## Testing the API
Test these API using [Postman](https://www.getpostman.com/downloads/)

## Instruction for the input of strings for some specific cases
* Please do not post empty ```strA```
It will show ```error: strA required ```

If you want to post string ```strA``` empty then change the line 5 to  ```required: false``` into file ```strings-model.js``` which is located at ```/api/models/strings-model.js```

### Add strA and strB using POST method to check
* JSON Data 
```json
{
	"strA": "abcdefg",
	"strB": "acgb"
}
```
* or
```json
{
	"strA": "abcdefg",
	"strB": ""
}
```

* or
```json
{
	"strA": "abcdefg",
	"strB": "aaa"
}
```
# Simple node api to compare two strings

This is a simple rest api to determine if a string is subset to another. 

## Requirements

- Node , npm , mongoDB

## Installation
* Clone this repository:
```
    $ git clone https://github.com/Ripon440/node-api-compare-string.git
```
* Install npm dependencies
```
    $ npm install
```
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

### Add strA and strB using POST method,data

```json
{
	"strA": "abcdefg",
	"strB": "acgb"
}
```


# Airline - API Gateway

I have built a backend system that support multiple feature of airline company. 


This api gateway is backend for frontend

` FRONT-END => MIDDLE-END => BACK-END `

## Introduction

This project follow microservice architecture and it has four services for specific logic and one api gateway where all repository mention below.

* [API Gateway]()
* [Authentication Service](https://github.com/singhvivekkumar/auth-service-api)
* [Flights Serivce](https://github.com/singhvivekkumar/flight-service-api)
* [Booking Service](https://github.com/singhvivekkumar/booking-service-api)
* [Reminder Service](https://github.com/singhvivekkumar/reminder-service-api)


### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MySql](https://www.mysql.com/) This is an open-source relational database management system (RDBMS) that is widely used for managing and organizing data.
* [Sequelize ORM](https://sequelize.org/) This is a popular Object-Relational Mapping (ORM) library for Node.js. It provides a way to interact with relational databases such as MySQL, PostgreSQL, SQLite, and MSSQL using JavaScript..
* [Sequelize cli](https://sequelize.org/docs/v7/cli/) The Sequelize Command Line Interface (CLI) is a powerful tool for working with Sequelize, which is a promise-based Node.js ORM (Object-Relational Mapping) for PostgreSQL, MySQL, SQLite, and MSSQL.
<!-- * []() -->

## Environment Setup:

### Prerequisites:

**Please note: You make sure that all the service working properly before initialize `API Gateway`.

1. Clone the repository:

   ```shell
   git clone https://github.com/singhvivekkumar/api-gateway.git
   ```

2. Move to the backend folder:

   ```shell
   cd api-gateway
   ```

3. Install and set up Docker.

	```shell
   npm install
   ```

### Create a `.env` file in the project's root directory.

The `.env` file should contain the following environment variables:

```shell
PORT=3005
BOOKING_SERVICE='http://localhost:<BOOKING_SERVICE_PORT_NUMBER>'
AUTH_SERVICE='http://localhost:<BOOKING_SERVICE_PORT_NUMBER>'
SEARCH_SERVICE='http://localhost:<BOOKING_SERVICE_PORT_NUMBER>'
AUTHENICATE_URL='http://localhost:<BOOKING_SERVICE_PORT_NUMBER>/api/v1/isauthenticated'
```


### Start the Backend Server:

To start the backend server, run the following command:

```shell
npm start
```

## REST API

### Request to test api gateway

`GET http://localhost:3005/api/home`

### Response
{
  "message": "successfully hitted api gateway"
}

### Request

`GET /thing/1`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/1

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}


Congratulations! Your backend is now running at http://localhost:3005/.
# About

The music library API project as part of the Manchester Codes curriculum of the backend module. 

This project is live here
The project implements  RESTful routes and allows users to perform CRUD operations for an artist and album in a MYSQL database.

The project was built with Node and Express and uses SQL to interact with the database.

Test Driven Development was used throughout the project with Mocha, Chai and Supertest used for integration testing.

# Installation

Pull a MYSQL image and run the container
Clone this repo
Change into the repo directory
Run npm install
Create a .env file and add local variables:
- DB_PASSWORD
- DB_NAME
- DB_USER
- DB_HOST
- DB_PORT
- PORT

If you want to run the test create a new .env.test file with same environmental variables as above and only changing the DB_NAME variable. 

To run the project - npm start
To run the tests - npm test
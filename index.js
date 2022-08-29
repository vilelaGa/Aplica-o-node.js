// const { Person } = require("./person");
const dotenv = require("dotenv");
const connecToDatabase = require("./src/database/connect");

dotenv.config();
connecToDatabase();

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
require("./modules/express");

// const person = new Person("Gabriel");

// console.log(person.sayMyName());

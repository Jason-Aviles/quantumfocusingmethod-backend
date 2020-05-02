const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const rate = require('./router')

require("dotenv").config();

const server = express();

server.use(helmet());

//server.use(morgan("combined"));
server.use(express.json());

server.use(cors());
// server.options("*", cors());


server.use('/',rate)
module.exports = server;

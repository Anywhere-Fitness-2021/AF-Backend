const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const usersRouter = require("./users/users-router");
const classesRouter = require("./classes/classes-router");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use("/api/users", usersRouter);
server.use("/api/classes", classesRouter);

//SANITY CHECK ENDPOINT
server.get("/", (req, res, next)=>{
    res.json({message: "API Up"})
});

//GLOBAL ERROR HANDLING MIDDLEWARE
server.use((err, req, res, next)=>{
    res.status(500).json({message: err.message});
})

module.exports = server;

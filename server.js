const express = require("express");
const server = express();
// const todoRouter = require("./todos/todo-router");

//Welcome
server.get("/", (req, res, next) => {
   res.json({message: "Welcome to node-auth1-project API!"});
});

//404 Not Found
server.use((req, res, next) => {
   res.status(404).json({
      message: "Page not found"
   });
});

//500 Server Errors
server.use((error, req, res, next) => {
   res.status(500).json({
      data: error.toString()
   });
});
module.exports = server;
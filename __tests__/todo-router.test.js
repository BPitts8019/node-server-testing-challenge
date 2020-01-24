const superTest = require("supertest");
const server = require("server");
const todo_db = require("../data/yourMom");

beforeEach(() => {
   todo_db.seed();
});

describe("Test Todo Router", () => {
   test("Get all of the todos", () => {

   });
   test("Get a specific todo", () => {

   });
   test("Create a todo", () => {

   });
   test("Delete a todo", () => {

   });
});
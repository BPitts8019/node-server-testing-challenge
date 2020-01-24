const superTest = require("supertest");
const server = require("server");
const todo_db = require("../data/yourMom");

beforeEach(() => {
   todo_db.seed();
});

describe("Initial Endpoints", () => {
   test("Welcome route", () => {

   });
   test("404 Page not found", () => {

   });
   test("500 Server Error", () => {

   });
});
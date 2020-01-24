const superTest = require("supertest");
const server = require("../server");
const todo_db = require("../data/yourMom");

beforeEach(() => {
   todo_db.seedData();
});

describe("Initial Endpoints", () => {
   test("Welcome route", () => {
      const res = superTest(server).get("/");

      //Does it return the expected status code?
      expect(res.status).toBe(200);
      //Does it return the expected data format?
      expect(res.type).toBe("application/json");
      //Does it return the expected data?
      expect(res.body.message).toMatch(/Welcome to node-server-testing-challenge API/i);
   });
   test("404 Page not found", () => {
      const res = superTest(server).get("/");

      expect(res.status).toBe(404);
      expect(res.type).toBe("application/json");
      expect(res.body.message).toMatch(/Page not found!/i);
   });
   // test("500 Server Error", () => {

   // });
});
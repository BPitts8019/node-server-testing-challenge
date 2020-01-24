const superTest = require("supertest");
const server = require("../server");
const todo_db = require("../data/yourMom");

beforeEach(() => {
   todo_db.seedData();
});

describe("Todos Endpoints", () => {
   test("Get all of the todos", async () => {
      const res = await superTest(server).get("/api/todos");

      //Does it return the expected status code?
      expect(res.status).toBe(200);
      //Does it return the expected data format?
      expect(res.type).toBe("application/json");
      //Does it return the expected data?
      expect(Array.isArray(res.body)).toBeTruthy();
      expect(res.body.length).toBe(3);
   });
   test("Get an existing todo item", () => {
      expect().toBeTruthy();
   });

   test("Get a non-existing todo item", () => {
      expect().toBeTruthy();
   });

   test("Create a todo", () => {
      expect().toBeTruthy();
   });

   test("Delete a todo", () => {
      expect().toBeTruthy();
   });
});

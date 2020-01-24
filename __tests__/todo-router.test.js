const superTest = require("supertest");
const server = require("../server");
const todo_db = require("../data/yourMom");

beforeEach(() => {
   todo_db.seedData();
});

describe("Todos Endpoints", () => {
   test("Get all of the todos", async () => {
      const response = await superTest(server).get("/api/todos");

      //Does it return the expected status code?
      expect(response.status).toBe(200);
      //Does it return the expected data format?
      expect(response.type).toBe("application/json");
      //Does it return the expected data?
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toBe(3);
   });

   test("Get a todo item with bad ID", async () => {
      const response = await superTest(server).get("/api/todos/bad-id");

      expect(response.status).toBe(400);
      expect(response.type).toBe("application/json");
      expect(response.body.message).toBe("Please enter the ID for the task you'd like to retrieve.");
   });

   test("Get a non-existing todo item", async () => {
      const response = await superTest(server).get("/api/todos/10");

      expect(response.status).toBe(404);
      expect(response.type).toBe("application/json");
      expect(response.body.message).toBe("No task with that id");
   });

   test("Get an existing todo item", async () => {
      const response = await superTest(server).get("/api/todos/1");

      expect(response.status).toBe(200);
      expect(response.type).toBe("application/json");
      expect(response.body).toEqual({
         id: 1,
         task: "Clean your room",
         completed: false
      });
   });

   test("Create a todo", () => {
      expect().toBeTruthy();
   });

   test("Delete a todo", () => {
      expect().toBeTruthy();
   });
});

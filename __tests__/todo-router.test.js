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

   test("Create a todo with a no task", async () => {
      const response = await superTest(server)
         .post("/api/todos")
         .send({
            task: "",
            completed: false
         });

      expect(response.status).toBe(400);
      expect(response.type).toBe("application/json");
      expect(response.body.message).toBe("Please provide a task for the todo.");
   });

   test("Create a todo", async () => {
      const response = await superTest(server)
         .post("/api/todos")
         .send({
            task: "Do something awesome",
            completed: true
         });

      expect(response.status).toBe(201);
      expect(response.type).toBe("application/json");
      expect(response.body).toEqual({
         id: 4,
         task: "Do something awesome",
         completed: true
      });
   });

   test("Create a todo no completed property", async () => {
      const response = await superTest(server)
         .post("/api/todos")
         .send({
            task: "Do something awesome again"
         });

      expect(response.status).toBe(201);
      expect(response.type).toBe("application/json");
      expect(response.body).toEqual({
         id: 4,
         task: "Do something awesome again",
         completed: false
      });
   });

   test("Remove a todo with bad ID", async () => {
      const response = await superTest(server)
         .delete("/api/todos/bad-id");

      expect(response.status).toBe(400);
      expect(response.type).toBe("application/json");
      expect(response.body.message).toBe("Please enter the ID for the task you'd like to remove.");
   });

   test("Remove a non-existing todo item", async () => {
      const response = await superTest(server)
         .delete("/api/todos/10");

      expect(response.status).toBe(404);
      expect(response.type).toBe("application/json");
      expect(response.body.message).toBe("No task with that id");
   });

   test("Remove a todo item", async () => {
      const response = await superTest(server)
         .delete("/api/todos/1");

      expect(response.status).toBe(200);
      expect(response.type).toBe("application/json");
      expect(response.body).toEqual({
         id: 1,
         task: "Clean your room",
         completed: false
      });
   });
});

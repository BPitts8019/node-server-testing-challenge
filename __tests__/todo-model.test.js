const todoModel = require("../data/yourMom");

beforeEach(() => {
   todoModel.seedData();
});

describe("Todo Model", () => {
   test("findAll", () => {
      const result = todoModel.findAll();

      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(3);
   });
   test("findById", () => {
      const result = todoModel.findById(2);

      expect(result).toEqual({
         id: 2,
         task: "Finish Homwork",
         completed: false
      });
   });
   test("add", () => {
      const newTask = {
         task: "Test add function",
         completed: true
      };

      const result = todoModel.add(newTask);

      expect(result).toEqual({
         id: 4,
         ...newTask
      });
      expect(todoModel.findAll().length).toBe(4);
   });
   test("removeTask", () => {
      const removedTask = todoModel.removeTask(3);

      expect(removedTask).toEqual({
         id: 3,
         task: "Take out the trash",
         completed: false
      });
      expect(todoModel.findAll().length).toBe(2);
   });
});
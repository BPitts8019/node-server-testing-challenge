const todoModel = require("../data/yourMom");

/*
function add (newTask) {
   todo_list.push(newTask);

   return findAll();
}
function findAll () {
   return [...todo_list];
}
function findById (id) {
   return todo_list.find(task => task.id === id);
}
function removeTask (id) {
   const oldTask = findById(id);
   todo_list.filter(task => task.id === id);

   return oldTask;
}
function seedData () {
   todo_list = [
      {
         id: 1,
         task: "Clean your room",
         completed: false
      },
      {
         id: 2,
         task: "Finish Homwork",
         completed: false
      },
      {
         id: 3,
         task: "Take out the trash",
         completed: false
      }
   ];

   return findAll();
}
*/

beforeEach(() => {
   todoModel.seedData();
});

describe("Todo Model", () => {
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
   });
   test("removeTask", () => {
      expect(true).toBe(false);
   });
   test("findAll", () => {
      expect(true).toBe(false);
   });
   test("findById", () => {
      expect(true).toBe(false);
   });
});
let nextId = 0;
let todo_list = [];

function add (taskData) {
   const newTask = {
      id: nextId++,
      ...taskData
   };

   todo_list.push(newTask);

   return findById(newTask.id);
}
function findAll () {
   return [...todo_list];
}
function findById (id) {
   return todo_list.find(task => task.id === id);
}
function removeTask (id) {
   const oldTask = findById(id);
   todo_list = todo_list.filter(task => task.id !== id);

   return oldTask;
}
function seedData () {
   nextId = 4;
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

module.exports = {
   add,
   removeTask,
   findAll,
   findById,
   seedData
};
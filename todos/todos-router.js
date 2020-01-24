const router = require("express").Router();
const todoModel = require("../data/yourMom");

router.post("/", (req, res, next) => {
   if (!req.body.task) {
      return res.status(400).json({
         message: "Please provide a task for the todo."
      });
   }

   const newTask = todoModel.add(req.body);
   res.status(201).json(newTask);
});

router.get("/", (req, res, next) => {
   const tasks = todoModel.findAll();
   res.json(tasks);
});

router.get("/:id", (req, res, next) => {
   const id = Number(req.params.id);

   if (!Number.isInteger(id)) {
      return res.status(400).json({
         message: "Please enter the ID for the task you'd like to retrieve."
      });
   }

   const task = todoModel.findById(id);
   if (!task) {
      return res.status(404).json({
         message: "No task with that id"
      });
   }

   res.json(task);
});

module.exports = router;
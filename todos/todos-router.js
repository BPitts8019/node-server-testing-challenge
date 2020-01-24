const router = require("express").Router();
const todoModel = require("../data/yourMom");

router.get("/", (req, res, next) => {
   const tasks = todoModel.findAll();
   res.json(tasks);
});

module.exports = router;
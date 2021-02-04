const Todo = require("../model/todo");

const findTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    res.render("edit.ejs", { todo: todo });
  } catch (err) {
    res.render("error.ejs", { error: err });
  }
};
module.exports = findTodo;

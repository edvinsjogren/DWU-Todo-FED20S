const Todo = require("../model/todo");

const editTodo = async (req, res) => {
  try {
    await Todo.updateOne({ _id: req.body.id }, { name: req.body.name });
    res.redirect("/");
  } catch (err) {
    res.render("error.ejs", { error: err });
  }
};

module.exports = editTodo;

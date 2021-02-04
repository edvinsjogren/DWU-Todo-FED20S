const Todo = require("../model/todo");

const deleteTodo = async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch (err) {
    res.render("error.ejs", { error: err });
  }
};

module.exports = deleteTodo;

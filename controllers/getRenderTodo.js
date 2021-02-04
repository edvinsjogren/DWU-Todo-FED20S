const Todo = require("../model/todo");

const renderTodo = async (req, res) => {
  const sortName = +req.query.sorted || 1;
  const page = +req.query.page || 1;

  try {
    const toDoList = await Todo.find().countDocuments();
    const amountDisplayed = 4;
    const mathCeil = Math.ceil(toDoList / amountDisplayed);
    const displayTodos = amountDisplayed * page;
    const data = await Todo.find().limit(displayTodos).sort({ date: sortName });

    res.render("index.ejs", {
      toDoList,
      amountDisplayed,
      mathCeil,
      displayTodos,
      data,
      errors: "empty",
    });
  } catch (err) {
    res.render("error.ejs", { error: err });
  }
};

module.exports = renderTodo;

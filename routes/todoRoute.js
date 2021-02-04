const express = require("express");
const Todo = require("../model/todo");
const router = express.Router();

router.get("/", async (req, res) => {
  const sortName = +req.query.sorted || 1;
  //const sortDate = +req.query.sortedDate || 1;
  const page = +req.query.page || 1;

  try {
    const toDoList = await Todo.find().countDocuments();
    const amountDisplayed = 4;
    const mathCeil = Math.ceil(toDoList / amountDisplayed);
    const displayTodos = amountDisplayed * page;
    const data = await Todo.find().limit(displayTodos).sort({ name: sortName });
    const data2 = await Todo.find().limit(displayTodos).sort({ date: sortName });

    res.render("index.ejs", {
      toDoList,
      amountDisplayed,
      mathCeil,
      displayTodos,
      data,
      data2,
      errors: "empty",
    });
  } catch (err) {
    res.render("error.ejs", { error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    await new Todo({ name: req.body.name }).save();
    res.redirect("/");
  } catch (err) {
    res.render("error.ejs", { error: err });
  }
});

router.get("/edit/:id", async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id });
  res.render("edit.ejs", { todo: todo });
});

router.post("/edit", async (req, res) => {
  await Todo.updateOne({ _id: req.body.id }, { name: req.body.name });
  res.redirect("/");
});

router.get("/delete/:id", async (req, res) => {
  await Todo.deleteOne({ _id: req.params.id });
  res.redirect("/");
});

module.exports = router;
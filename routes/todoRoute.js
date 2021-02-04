const express = require("express");
const postTodo = require("../controllers/postNewTodo");
const editTodo = require("../controllers/postEditTodo");
const deleteTodo = require("../controllers/getDeleteTodo");
const findTodo = require("../controllers/getFindTodo");
const renderTodo = require("../controllers/getRenderTodo");
const router = express.Router();

router.get("/", renderTodo);

router.post("/", postTodo);

router.get("/edit/:id", findTodo);

router.post("/edit", editTodo);

router.get("/delete/:id", deleteTodo);

module.exports = router;

const postTodo = async (req, res) => {

    
    try {
      await new Todo({ name: req.body.name }).save();
      console.log("hlli")
      
      res.redirect("/");
    } catch (err) {
      res.render("error.ejs", { error: err });
    }
  }

  module.exports = postTodo
const Visitor = require("../model/Visitor");

// GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

// GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  console.log(Visitor.getVisitors());
  res.render("visitor", { data: Visitor.getVisitors() });
};

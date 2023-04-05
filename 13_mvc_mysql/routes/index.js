const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// 기본 주소: localhost:PORT

// GET / => localhost:PORT/
router.get("/", controller.main);

// GET /visitor => localhost:PORT/visitor
router.get("/visitor", controller.getVisitors);

module.exports = router;

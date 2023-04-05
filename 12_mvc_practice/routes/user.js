const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);
router.post("/practice2", controller.practice2);

module.exports = router; // 여기서 내보내기를 해주었기 때문에 app.js에서 const userRouter = require("./routes/user"); 이렇게 사용 가능

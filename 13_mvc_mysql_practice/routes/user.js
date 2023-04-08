const express = require("express");
const controller = require("../controller/Cuser"); // controller를 불러온다.
const router = express.Router();

// 기본 주소: localhost:PORT/user

// localhost:PORT/user
router.get("/", controller.index);

// localhost:PORT/user/signup
router.get("/signup", controller.signup);
router.post("/signup", controller.post_signup);

// localhost:PORT/user/signin
router.get("/signin", controller.signin);
router.post("/signin", controller.post_signin);

router.post("/profile", controller.post_profile);
router.post("/profile/edit", controller.edit_profile);
router.post("/profile/delete", controller.delete_profile);

module.exports = router;

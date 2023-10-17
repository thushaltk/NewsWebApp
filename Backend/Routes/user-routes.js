const express = require("express");
const userController = require("../Controllers/user-controller");

const router = express.Router();

//routes
router.post("/register-user", userController.userRegister);
router.post("/login-user", userController.userLogin);

module.exports = router;

const express = require("express");
const adminController = require("../Controllers/admin-controller");

const router = express.Router();

//routes
router.post("/register-admin", adminController.adminRegister);
router.post("/login-admin", adminController.adminLogin);

module.exports = router;

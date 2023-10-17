const express = require("express");
const adminController = require("../Controllers/admin-controller");

const router = express.Router();

//routes
router.post("/register-admin", adminController.adminRegister);

module.exports = router;

const express = require("express");
const sendMail = require("./emailController");
const router = express.Router();
router.route("/").post(sendMail);
module.exports = router;

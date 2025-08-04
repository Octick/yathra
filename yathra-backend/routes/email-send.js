const express = require("express");
const router = express.Router();
const emailController = require("../controller/emailController");

router.post("/send", emailController.sendEmail);
router.post('/booking', emailController.sendBooking);
router.post('/contact', emailController.contact)

module.exports = router;

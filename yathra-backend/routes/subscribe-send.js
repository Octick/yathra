const express = require("express");
const router = express.Router();
const subsController = require("../controller/subsController");

router.post("/subscribe", subsController.sendEmail);

module.exports = router;
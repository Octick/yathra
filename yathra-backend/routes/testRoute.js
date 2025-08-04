const express = require("express");
const router = express.Router();
const testController = require("../controller/testController");

router.get("/get-data", testController.getData);
router.post("/post-data", testController.postData);

module.exports = router;
const express = require("express");
const classController = require("../controllers/classController");
const router = express.Router();

router.get("/", classController.getScheduleClass);
// router.get("/:matchId", classController.getOneMatchSchedule);

module.exports = router;

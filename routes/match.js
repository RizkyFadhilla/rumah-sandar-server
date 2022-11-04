const express = require('express')
const matchController = require('../controllers/matchController')
const router = express.Router()

router.get("/", matchController.getAllMatch)
router.put("/:matchId", matchController.AddVolunteerToMatch)

module.exports = router
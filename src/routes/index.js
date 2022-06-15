const express = require("express");
const controller = require("../controllers");
const router = express.Router();

router.get("/all", controller.getAllSchedules);
router.post("/create", controller.createSchedule);
router.post("/cancel", controller.cancelSchedule);
router.post("/update", controller.updateSchedule);

module.exports = router;

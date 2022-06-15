const mongoose = require("mongoose");
const Schedule = require("../models");

const getAllSchedules = (req, res) => {
  Schedule.find((err, docs) => {
    if (!err) {
      res.status(201).json({
        data: docs,
      });
    } else {
      console.log(err);
    }
  });
};

const createSchedule = (req, res) => {
  const newSchedule = new Schedule({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    phone: req.body.phone,
    time: req.body.time,
  });
  newSchedule.save().then(async (result) => {
    await result
      .save()
      .then(() => {
        console.log(`Schedule created ${result}`);
        res.status(201).json({
          id: result._id,
          name: result.name,
          phone: result.phone,
          time: result.time,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          message: err.toString(),
        });
      });
  });
};

const cancelSchedule = (req, res) => {
  Schedule.findByIdAndRemove(req.body.id, (err, doc) => {
    if (!err) {
      res.status(201).json("schedule cancelled");
    } else {
      console.log(err);
    }
  });
};

const updateSchedule = async (req, res) => {
  const id = req.body.id;
  const schedule = await Schedule.findById(id);
  if (schedule) {
    schedule.updateOne(req.body);
  } else {
    res.status(400).json("BAD_REQUEST");
  }
};

module.exports = {
  getAllSchedules,
  createSchedule,
  cancelSchedule,
  updateSchedule,
};

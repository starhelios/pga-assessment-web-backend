const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  phone: { type: String, required: true },
  time: { type: String, required: true },
});

const Schedule = mongoose.model("schedule", ScheduleSchema);
module.exports = Schedule;

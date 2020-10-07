const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter workout type"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter name of workout"
  },
  duration: {
    type: Number,
    default: 0
  },
  weight: {
    type: Number,
    default: 0
  },
  reps: {
    type: Number,
    default: 0
  },
  sets: {
    type: Number,
    default: 0
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout; 
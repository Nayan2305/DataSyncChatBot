// const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const mongoose = require("mongoose");

const motorSchema = new mongoose.Schema(
  {
    usernames: [String], // An array of usernames
    userid: [String], // An array of userids
    mobile_number: {
      type: String,
      unique: true,
    },
    motor_id: {
      type: String,
      unique: true,
      maxlength: 8, // Set maximum length
      match: /^[a-zA-Z0-9]{1,8}$/, // Validate alphanumeric format
    },
    password: {
      type: String,
      min: 5,
    },
    motor_status: {
      type: Boolean,
      default: false,
    },
    motor_control: Boolean,
    fault_status: {
      type: Number,
      min: 0,
      max: 9, // Set range between 0 and 9
    },
    Ir: Number,
    Iy: Number,
    Ib: Number,
    Vry: Number,
    Vyb: Number,
    Vbr: Number,
    isActive: Boolean,
  },
  {
    timestamps: true, // This option adds createdAt and updatedAt fields
  }
);

const MotorData = mongoose.model("Motor", motorSchema);

module.exports = MotorData;
// module.exports.MotorData;

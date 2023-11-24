// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const motorSchema = new mongoose.Schema({
  usernames: [String],  // An array of usernames
  userid: [String],    // An array of userids
  mobile_number: String,
  motor_id: {
    type: String,
    unique: true
  },
  password:{
    type: String,
    min:5,
},
  motor_status:{
    type: Boolean,
    default: false
  },
  fault_status: Boolean,
  ir: Number,
  ix: Number,
  iy: Number,
  vr: Number,
  vx: Number,
  vy: Number,
}, {
  timestamps: true, // This option adds createdAt and updatedAt fields
});

const MotorData = mongoose.model('Motor', motorSchema);

// module.exports = MotorData;
export default MotorData;

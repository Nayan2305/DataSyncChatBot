import motorSchema from "../models/Motor.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUserProfile = async (req, res) => {
  try {
    const { usernames, mobile_number, motor_id, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userProfile = new motorSchema({
      usernames,
      mobile_number,
      motor_id,
      password: hashedPassword,
    });
    await userProfile.save();
    console.log("Success User");
    const payload = { phone: result.phone, id: result._id };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).json({ user: result, token: token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
};

export const login = async (req, res) => {
    try {
      const { mobile_number, password } = req.body;
      const user = await motorSchema.findOne({ mobile_number: mobile_number });
      if (!user) return res.status(400).json({ msg: "User not found" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      delete user.password;
      res.status(200).json({user:user,token:token});;
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };



export const getUserProfile = async (req, res) => {
  const { username } = req.params;

  try {
    // Find a user profile by the specified username
    const user = await motorSchema.findOne({ usernames: username });

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: "User profile not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

// module.exports = { createUserProfile };
// export default {createUserProfile,getUserProfile}
export const getMotorData = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const user = await motorSchema.findOne({ user_id });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Prepare the response data
    const motorData = {
      vr: user.vr,
      vx: user.vx,
      vy: user.vy,
      ir: user.ir,
      ix: user.ix,
      iy: user.iy,
      motor_status: user.motor_status,
      fault_status: user.fault_status,
      timestamp: user.timestamp,
    };

    res.json(motorData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const insertOrUpdateMotorData = async (req, res) => {
  try {
    const { motor_id } = req.params;
    const { ir, ix, iy, vr, vx, vy, motor_status, fault_status } = req.body;

    // Find the motor by motor_id or create a new entry
    let motor = await motorSchema.findOne({ motor_id });

    // if (!motor) {
    //     motor = new moto({ motor_id });
    // }

    motor.ir = ir;
    motor.ix = ix;
    motor.iy = iy;
    motor.vr = vr;
    motor.vx = vx;
    motor.vy = vy;
    motor.motor_status = motor_status;
    motor.fault_status = fault_status;
    // motor.timestamp = timestamp;

    await motor.save();
    res.json({ message: "Motor data inserted or updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const changeMotorStatus = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { motor_status } = req.body;

    // Find the user by user_id
    const motor = await motorSchema.findOne({ user_id });

    if (!motor) {
      return res.status(404).json({ error: "User not found" });
    }

    motor.motor_status = motor_status;
    await user.motor.save();

    res.json({ message: "Motor status updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addUserToUserProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const { user_id } = req.body;

    // Find the user by username
    let user = await motorSchema.findOne({ usernames: username });

    if (!user.user_id) {
      // If not, initialize it as an empty array
      user.user_id = [];
    }

    // Check if 'user_id' is already in the array
    if (!user.user_id.includes(user_id)) {
      user.user_id.push(user_id);
      await user.save();
      return res.json({ message: "User_id added successfully" });
    } else {
      return res
        .status(400)
        .json({ error: "User_id already exists in user_id array" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
// module.exports = { getUserData };

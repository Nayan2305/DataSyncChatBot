import express from 'express';
const router = express.Router();
// const userController = require('../controllers/Motor.js');
import {login,createUserProfile,getUserProfile, getMotorData,insertOrUpdateMotorData,changeMotorStatus,addUserToUserProfile} from '../controllers/Motor.js'
// Create user profile
router.post('/create_user_profile', createUserProfile);
router.get('/get_user_profile/:username', getUserProfile);
router.get('/user_data/:username', getMotorData);
router.put('/insert_motor_data/:motor_id', insertOrUpdateMotorData);
router.put('/change_motor_status/:username', changeMotorStatus);
router.put('/add_user_id/:username', addUserToUserProfile);
router.post("/login", login);
export default router
// import express from 'express';
const express = require('express');
const router = express.Router();
// const userController = require('../controllers/Motor.js');
const {
    login,
    createUserProfile,
    getUserProfile, 
    getMotorData,
    insertOrUpdateMotorData,
    changeMotorStatus,
    addUserToUserProfile,
    getMotorById,
    getMotorByMobileNumber,
    getDataForUser,
    changeMotorStatusbybot,
    getAllMotorData} = require('../controllers/Motor.js');

// Create user profile
router.post('/create_user_profile', createUserProfile);
router.get('/get_user_profile/:token', getUserProfile);
router.get('/user_data/:username', getMotorData);
router.put('/insert_motor_data/:motor_id', insertOrUpdateMotorData);
router.put('/change_motor_status/:motor_id', changeMotorStatus);
router.put('/add_user_id/:username', addUserToUserProfile);
router.post("/login", login);


router.get('/motor/:motorId', getMotorById);
router.get('/motor/mobile/:mobileNumber', getMotorByMobileNumber);
router.get('/get-all-motorData/all', getAllMotorData); // New route for getting all data
router.get('/motor/user/:Id', getDataForUser);
router.put('/change_motor_statusbybot/:username', changeMotorStatusbybot);
// module.exports.router
module.exports = router ;
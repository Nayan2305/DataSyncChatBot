// import express from "express";
const express = require('express')
// import bodyParser from "body-parser";
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
// import mongoose from "mongoose";
// import cors from "cors";
const compression = require('compression');
const cors = require('cors');
const dotenv = require('dotenv');
// import dotenv from "dotenv";
// import multer from "multer";
// import helmet from "helmet";
// import morgan from "morgan";
// import path from "path";
const path = require('path');
// const { fileURLToPath } = require("url");
//import User from "./models/User.js";

const userRoutes = require("./routes/Motor.js");



// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
// app.use(cors())
app.use(bodyParser.json());
app.use(compression());
const corsOptions = {
  origin: ['http://iot.sunshineagro.in','http://localhost:3000'], // Replace with your client's origin
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
};

app.use(cors(corsOptions));

// Add this middleware for handling preflight requests
app.options('*', cors(corsOptions));


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000', 'http://iot.sunshineagro.in');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


// app.use("/auth", authRoutes);


/*Mongoose setup*/
const PORT = process.env.PORT || 4001;
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: `DataSyncChatBot`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));




app.use('/api', userRoutes);







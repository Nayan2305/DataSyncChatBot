import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import multer from "multer";
// import helmet from "helmet";
// import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
//import User from "./models/User.js";

import userRoutes from "./routes/Motor.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());



app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


// app.use("/auth", authRoutes);


/*Mongoose setup*/
const PORT = process.env.PORT || 3005;
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





  //routes


// app.use('/api/v1/product',product)
// app.use('/api/v1/users',User)
// // app.use('/api/v1/orders',orders)
// app.use('/api/v1/auth',authRoutes)
// // app.use('/api/v1/payment',payment)
app.use('/api', userRoutes);







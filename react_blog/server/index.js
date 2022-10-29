
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";


const App = express();


dotenv.config();


App.use(bodyParser.json({limit: "30mb", extended: true}));
App.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
App.use(cors());

App.use('/', postRoutes);


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => App.listen(PORT, () => console.log(`Server running on port:    ${PORT}`)))
        .catch((error) => console.log(error.message));

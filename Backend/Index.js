import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./src/Controllers/Controller.js";
import Config from "./Config/Config.js";

const app = express();

// Connet to MongoDb Atlas
mongoose.set('strictQuery', false);
mongoose.connect(Config.CONNECTIONSTRING);

// Use Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use("/api", router);

// Running Server
app.listen(Config.PORT, () => console.log(`Server running in : http://localhost:${Config.PORT}`));

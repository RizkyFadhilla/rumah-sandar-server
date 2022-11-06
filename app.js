const path = require("path")
const express = require("express");
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandlers");
const app = express();
const job = require("./cron/every_10_minutes")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('multer/tmp'))
app.use(`/`, router);
app.use(errorHandler);
module.exports = app;

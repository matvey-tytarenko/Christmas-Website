const express = require("express");
const cors = require("cors");
const router = require("./Routes/UserRouter");
const CorsControl = require('./Controller/CorsControl')

const app = express();

app.use(express.json());
app.use(cors());
app.use(CorsControl);
app.use("/api", router);

module.exports = app;

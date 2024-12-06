const express = require("express");
const cors = require("cors");
const router = require("./Routes/UserRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

module.exports = app;

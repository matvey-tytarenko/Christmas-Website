const express = require("express");
const cors = require("cors");
const router = require("./Routes/UserRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use('/files', express.static('public/files'))

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Server is running!" });
});

app.get("/files/:filename", (req, res, next) => {
  res.setHeader("Content-Disposition", "attachment");
  next();
});

module.exports = app;

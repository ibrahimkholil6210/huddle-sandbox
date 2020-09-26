const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();

app.use(logger("tiny"));
app.use(cors());

app.get(
  "/api/user",
  (req, res, next) => {
    req.id = 1555;
    next();
  },
  (req, res) => {
    res.status(200).json({ name: "Ibrahim", age: 24, id: req.id });
  }
);

app.listen(8080, () => {
  console.log("Server running at port 8080!");
});

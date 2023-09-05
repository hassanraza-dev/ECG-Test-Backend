require("dotenv").config();
const express = require("express");
const cors = require("cors");
const BookRoutes = require("./routes/books");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// connet to database

mongoose
  .connect(process.env.MONG_URI)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/books", BookRoutes);

app.listen(PORT, () => {
  console.log("server is running");
});

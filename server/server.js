const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Established"))
  .catch((e) => console.log(e));

app = express();
app.use(express.lson());
app.use(cors);

let blogSchema = new mongoose.Schema({
  title: String,
  language: String,
  description: String,
});

cards = mongoose.model("cards", blogSchema);

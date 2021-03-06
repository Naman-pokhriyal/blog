const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://naman-admin:45naman89@cluster0.ddj02.mongodb.net/blog",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connection Established"))
  .catch((e) => console.log(e));

app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://hardcore-pike-0295f9.netlify.app/"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

let blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  language: String,
  description: String,
});

cards = mongoose.model("cards", blogSchema);

app.get("/cards", async (req, res) => {
  await cards.find({}, function (err, card) {
    if (err) {
      console.log(err);
    } else {
      res.send({ list: card });
    }
  });
});

app.listen(process.env.PORT || 3001);

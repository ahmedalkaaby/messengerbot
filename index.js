// const functions = require("firebase-functions");
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.set("port", process.env.PORT || 5000);

//allow us to process the data
app.use(bodyParser.urlencoded({ textended: false }));
app.use(bodyParser.json());

//Routes
app.get("/", function (req, res) {
  console.log("hello");
  res.send("Hi, Im Ahmed.. :)");
});

// Facebook
app.get("/webhook/", function (req, res) {
  if (req.query["hub.verify_token"] === "nabeelbot") {
    res.send(req.query["hub.challenge"]);
  }
  res.send("ERROR! Wrong Token");
});

app.listen(app.get("port"), function () {
  console.log("running: port");
});

// exports.app = functions.https.onRequest(app);

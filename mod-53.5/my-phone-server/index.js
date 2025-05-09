const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("My Phone information is coming soon toon");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("I need phone id :", id);

  const phone = phones.find((phone) => phone.id === id) || {};

  res.send(phone);
});

app.listen(port, () => {
  console.log(`My phone server is running at port : ${port}`);
});

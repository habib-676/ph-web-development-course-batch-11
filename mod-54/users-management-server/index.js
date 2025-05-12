const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json()); //body is still undefined

app.get("/", (req, res) => {
  res.send("Server is running");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com" },
  { id: 2, name: "Sabnur", email: "sabnur@gmail.com" },
  { id: 3, name: "Sabila", email: "sabila@noor.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Users post method");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Users server is running on port : ${port}`);
});

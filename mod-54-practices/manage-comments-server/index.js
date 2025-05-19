const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running finely");
});

const userComments = [
  {
    id: 1,
    name: "John Doe",
    comment: "This is a very helpful article!",
    date: "2025-05-13",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Thanks for sharing this information.",
    date: "2025-05-12",
  },
  {
    id: 3,
    name: "Rahim Uddin",
    comment: "I learned a lot from this post.",
    date: "2025-05-11",
  },
  {
    id: 4,
    name: "Maria Ahmed",
    comment: "Can you please explain more about the last section?",
    date: "2025-05-10",
  },
];

app.get("/comments",(req,res)=>{
    res.send(userComments);
})

app.listen(port, () => {
  console.log(`Comments server is running at port : ${port}`);
});

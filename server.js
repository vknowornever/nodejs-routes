const express = require("express");
const friendsRoutes = require("./routes/friends.routes");

const app = express();

app.use(express.json());

app.use("/friends", friendsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to node router learning");
});

app.listen(8000, () => {
  console.log("app listining at port 8000");
});

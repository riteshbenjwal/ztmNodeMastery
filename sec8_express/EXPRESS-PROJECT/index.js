const express = require("express");
const app = express();

const messagesController = require("./controllers/messages.controller");
const friendsController = require("./controllers/friends.controller");

const PORT = 3000;



app.use((req, res, next) => {
  const start = Date.now();
  next(); //next is used to move to the next middleware
  const delta = Date.now() - start;
  console.log(`Request took ${delta} ms`);
  console.log(`${req.method} ${req.url}`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/friends", friendsController.getFriends);

app.post("/friends", friendsController.postFriend);

app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessages);

app.post("/messages", messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

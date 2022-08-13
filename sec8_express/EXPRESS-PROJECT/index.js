const express = require("express");
const app = express();



const friendsRouter = require('./routes/friends.router');

const messagesRouter = require('./routes/messages.router');

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

// Middleware to use for all /friends requests
app.use('/friends', friendsRouter);

// Middleware to use for all /messages requests
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

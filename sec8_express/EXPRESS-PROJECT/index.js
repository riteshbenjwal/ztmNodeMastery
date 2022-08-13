const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const friendsRouter = require("./routes/friends.router");

const messagesRouter = require("./routes/messages.router");

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next(); //next is used to move to the next middleware
  const delta = Date.now() - start;
  console.log(`Request took ${delta} ms`);
  console.log(`${req.method} ${req.url}`);
});

app.use("/site", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "My friends are toxic",
    caption: "This is a caption",
  });
});

// Middleware to use for all /friends requests
app.use("/friends", friendsRouter);

// Middleware to use for all /messages requests
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

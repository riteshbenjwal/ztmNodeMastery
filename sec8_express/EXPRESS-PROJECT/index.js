const express = require("express");
const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Albert Einstein",
  },
  {
    id: 1,
    name: "Isaac Newton",
  },
];


app.use((req,res,next)=>{
    const start = Date.now();
    next();//next is used to move to the next middleware
    const delta = Date.now() - start;
    console.log(`Request took ${delta} ms`);
    console.log(`${req.method} ${req.url}`);
})

app.use(express.json());




app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.post('/friends', (req,res)=>{
    if(!req.body.name ){
      return  res.status(400).json({
            error:'Name is required'
        })
    }
 const newFriend = {
      id: friends.length,
      name: req.body.name
 };
 friends.push(newFriend);
 res.json(newFriend);
 

});







app.get("/friends/:friendId", (req, res) => {
  const friendId = +req.params.friendId;
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend not found",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Albert!</li></ul>");
});

app.post("/messages", (req, res) => {
  res.send("Updating messages...");
  console.log("POST");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

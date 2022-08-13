const express = require('express');



const friendsController = require("../controllers/friends.controller");
const friends = require('../models/friends.model');


const friendsRouter = express.Router();

//middleware

friendsRouter.use((req, res, next) => {
   console.log('ip address:', req.ip);
   next();
});


//Friends router

friendsRouter.get("/", friendsController.getFriends);

friendsRouter.post("/", friendsController.postFriend);

friendsRouter.get("/:friendId", friendsController.getFriend);


module.exports = friendsRouter;
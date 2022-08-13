
const friends=require('../models/friends.model');


function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Name is required",
    });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);
  res.json(newFriend);
}

function getFriends(req, res) {
  res.status(200).json(friends);
}

function getFriend(req, res) {
  const friendId = +req.params.friendId;
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend not found",
    });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};

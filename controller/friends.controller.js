const friends = require("../model/friends.model");

function getFreinds(req, res) {
  res.status(200).send(friends);
}

function postFreinds(req, res) {
  const id = req.params.friend;
  if (id) {
    res.send(friends[id - 1]);
  }
}

module.exports = {
  getFreinds,
  postFreinds,
};

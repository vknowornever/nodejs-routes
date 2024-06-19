const express = require("express");

const friendsController = require("../controller/friends.controller");

const friendsRoutes = express.Router();

friendsRoutes.get("/", friendsController.getFreinds);
friendsRoutes.get("/:friend", friendsController.postFreinds);

module.exports = friendsRoutes;

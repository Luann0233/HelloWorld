const express = require("express");
const routes = express.Router();

const UseController = require("./controllers/user-controller");

routes.get("/users", UseController.index);
routes.post("/user", UseController.create);
routes.put("/user/:id", UseController.update);
routes.delete("/user/:id", UseController.delete);

module.exports = routes;

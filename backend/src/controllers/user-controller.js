const { v4 } = require("uuid");

const users = [];

module.exports = {
  async index(request, response) {
    return response.json(users);
  },

  async create(request, response) {
    const { name, email } = request.body;

    const user = { id: v4(), name, email };

    users.push(user);

    return response.json(user);
  },

  async update(request, response) {
    const { id } = request.params;
    const { name, email } = request.body;

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex < 0) {
      return response.status(404).json({ error: "User not found" });
    }

    const user = { id, name, email };

    users[userIndex] = user;

    return response.json(user);
  },

  async delete(request, response) {
    const { id } = request.params;

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex < 0) {
      return response.status(404).json({ error: "User not found" });
    }

    users.splice(userIndex, 1);

    return response.status(204).send();
  },
};

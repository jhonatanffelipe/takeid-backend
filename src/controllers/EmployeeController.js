const knex = require("../database/connection");
const { AppError } = require("../erros/AppError");

module.exports = {
  async index(req, res) {
    const employees = await knex("employees").select("*");
    res.json(employees);
  },

  async create(req, res) {
    const { name, position, email } = req.body;
    const [id] = await knex("employees").insert({ name, position, email });
    res.json({ id });
  },

  async show(req, res) {
    const { id } = req.params;
    const employee = await knex("employees").where({ id }).first();

    if (!employee) {
      throw new AppError("Colaborador não encontrado");
    }

    res.json(employee);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, position, email } = req.body;
    await knex("employees").where({ id }).update({ name, position, email });
    res.sendStatus(204);
  },

  async delete(req, res) {
    const { id } = req.params;
    await knex("employees").where({ id }).delete();
    res.sendStatus(204);
  },
};

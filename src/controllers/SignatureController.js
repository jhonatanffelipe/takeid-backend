const knex = require("../database/connection");

module.exports = {
  async index(req, res) {
    const signatures = await knex("signatures").select("*");
    res.json(signatures);
  },

  async create(req, res) {
    const { employee_id, signed_at, image } = req.body;
    const [id] = await knex("signatures").insert({
      employee_id,
      signed_at,
      image,
    });
    res.json({ id });
  },

  async show(req, res) {
    const { id } = req.params;
    const assinatura = await knex("signatures").where({ id }).first();
    res.json(assinatura);
  },

  async update(req, res) {
    const { id } = req.params;
    const { employee_id, signed_at } = req.body;
    const image = req.file?.path;
    await knex("signatures")
      .where({ id })
      .update({ employee_id, signed_at, image });
    res.sendStatus(204);
  },

  async delete(req, res) {
    const { id } = req.params;
    await knex("signatures").where({ id }).delete();
    res.sendStatus(204);
  },

  async findAll(req, res) {
    const { employee_id } = req.params;
    const signatures = await knex("signatures").where({ employee_id });
    res.json(
      signatures.sort((a, b) => new Date(b.signed_at) - new Date(a.signed_at))
    );
  },
};

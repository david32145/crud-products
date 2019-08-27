const ProductModel = require("../models/Product");
const Database = require("../database");

module.exports = {
  index: async (req, res) => {
    const data = await ProductModel(Database()).findAll();
    return res.status(200).send(data);
  },
  show: async (req, res) => {
    const data = await ProductModel(Database()).findOne({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).send(data);
  },
  store: async (req, res) => {
    try {
      const data = await ProductModel(Database()).create(req.body);
    } catch (err) {
      return res.status(400).send(
        err.errors.map(e => ({
          field: e.path,
          msg: e.message
        }))
      );
    }
    return res.status(200).send({
      ok: true
    });
  },
  update: async (req, res) => {
    console.log(req.body);
    await ProductModel(Database()).update(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.status(200).send({
      ok: true,
      msg: "O produto com id = " + req.params.id + " foi atualizado!!!"
    });
  },
  remove: async (req, res) => {
    const data = await ProductModel(Database()).destroy({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).send({
      ok: true,
      msg: "O produto com id = " + req.params.id + " foi atualizado!!!"
    });
  }
};

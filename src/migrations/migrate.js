const ProductModel = require("../models/Product");
const Database = require("../database");

async function createProductTable() {
  await ProductModel(Database()).sync({ force: true });
}

createProductTable();

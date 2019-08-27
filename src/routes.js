const { Router } = require("express");
const ProductController = require("./controllers/ProductController");
const routes = Router();

routes.get("/product", ProductController.index);
routes.get("/product/:id", ProductController.show);
routes.post("/product", ProductController.store);
routes.put("/product/:id", ProductController.update);
routes.delete("/product/:id", ProductController.remove);

module.exports = routes;

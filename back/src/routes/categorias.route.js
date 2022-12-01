const express = require('express');
const router = express.Router();

const Categoria = require("../controllers/categorias.controller");

router.get("/categorias/read", Categoria.listarCategorias);
router.post("/categoria/create", Categoria.cadastrarCategoria);

module.exports = router;
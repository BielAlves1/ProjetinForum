const express = require('express');
const router = express.Router();

const Categoria = require("../controllers/categorias.controller");

router.get("/categorias/read", Categoria.listarCategorias);
router.post("/categorias/create", Categoria.cadastrarCategoria);
router.delete("/categorias/delete/:id_categoria", Categoria.excluirCategoria);

module.exports = router;
const express = require('express');
const router = express.Router();

const Categoria = require("../controllers/categorias.controller");

router.get("/categorias/read", Categoria.listarCategorias);
router.post("/categoria/create", Categoria.cadastrarCategoria);
router.delete("/usuarios/delete/:id_categoria", Categoria.excluirCategoria);

module.exports = router;
const express = require('express');
const router = express.Router();

const SubCategoria = require("../controllers/subCats.controller");

router.get("/subCategorias/read", SubCategoria.listarSubCategorias);
router.post("/subCategorias/create", SubCategoria.cadastrarSubCategoria);
router.delete("/subCategorias/delete/:id_subcat", SubCategoria.excluirSubCategoria);

module.exports = router;
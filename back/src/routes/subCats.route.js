const express = require('express');
const router = express.Router();

const SubCategoria = require("../controllers/subCats.controller");

router.get("/subCategorias/read", SubCategoria.listarSubCategorias);
router.post("/subCategoria/create", SubCategoria.cadastrarSubCategoria);
router.delete("/subCategoria/delete/:id_subcat", SubCategoria.excluirSubCategoria);

module.exports = router;
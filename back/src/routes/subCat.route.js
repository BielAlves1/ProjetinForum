const express = require('express');
const router = express.Router();

const SubCategoria = require("../controllers/subCat.controller");

router.get("/subCategorias/read", SubCategoria.listarSubCategorias);
router.post("/subCategoria/create", SubCategoria.cadastrarSubCategoria);

module.exports = router;
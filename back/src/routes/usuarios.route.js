const express = require('express');
const router = express.Router();

const Usuario = require("../controllers/usuarios.controller");

router.get("/usuarios/read", Usuario.listarUsuarios);
router.get("/usuarios/read/:nome_user", Usuario.listarUsuario);
router.post("/usuarios/create", Usuario.cadastrarUsuario);
router.post("/usuarios/login", Usuario.login);
router.put("/usuarios/update", Usuario.alterarUsuario);
router.delete("/usuarios/delete/:id_user", Usuario.excluirUsuario);

module.exports = router;
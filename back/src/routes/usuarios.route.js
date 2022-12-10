const express = require('express');
const router = express.Router();

const Usuario = require("../controllers/usuarios.controller");

router.get("/usuarios/readAll", Usuario.listarView);
router.get("/usuarios/read", Usuario.listarUsuarios);
router.get("/usuarios/read/:nome_user", Usuario.listarUsuario);
router.post("/usuarios/create", Usuario.cadastrarUsuario);
router.post("/usuarios/createPerfil", Usuario.cadastrarPerfilUsuario);
router.post("/usuarios/login", Usuario.login);
router.put("/usuarios/update/username", Usuario.alterarUsername);
router.put("/usuarios/update/senha", Usuario.alterarPassword);
router.delete("/usuarios/delete/:id_user", Usuario.excluirUsuario);

module.exports = router;
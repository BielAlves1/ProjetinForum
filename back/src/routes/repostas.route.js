const express = require('express');
const router = express.Router();

const Resposta = require("../controllers/respostas.controller");

router.get("/respostas/read", Resposta.listarRespostas);
router.post("/respostas/create", Resposta.cadastrarResposta);
router.put("/respostas/update", Resposta.alterarResposta);
router.delete("/respostas/delete/:id_resp", Resposta.excluirResposta);

module.exports = router;
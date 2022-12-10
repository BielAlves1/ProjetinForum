const express = require('express');
const router = express.Router();

const Comentario = require("../controllers/comentarios.controller");

router.get("/comentarios/read", Comentario.listarComentarios);
router.get("/comentarios/read/:data", Comentario.listarComentarios);
router.post("/comentarios/create", Comentario.cadastrarComentario);
router.put("/comentarios/update", Comentario.alterarComentario);
router.delete("/comentarios/delete/:id_comentario", Comentario.excluirComentario);

module.exports = router;
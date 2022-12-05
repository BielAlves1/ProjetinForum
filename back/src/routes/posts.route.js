const express = require('express');
const router = express.Router();

const Post = require("../controllers/posts.controller");

router.get("/usuarios/read", Post.listarPosts);
router.get("/usuarios/read/:data", Post.listarPosts);
router.post("/usuarios/create", Post.cadastrarPost);
router.put("/usuarios/update", Post.alterarPost);
router.delete("/usuarios/delete/:id_pub", Post.excluirPost);

module.exports = router;
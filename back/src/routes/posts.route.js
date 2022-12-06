const express = require('express');
const router = express.Router();

const Post = require("../controllers/posts.controller");

router.get("/posts/read", Post.listarPosts);
router.get("/posts/read/:data", Post.listarPosts);
router.post("/posts/create", Post.cadastrarPost);
router.put("/posts/update", Post.alterarPost);
router.delete("/posts/delete/:id_pub", Post.excluirPost);

module.exports = router;
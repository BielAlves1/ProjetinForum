const express = require('express');
const router = express.Router();

const Post = require("../controllers/posts.controller");

router.get("/posts/readAll", Post.listarPosts);
router.get("/posts/readView", Post.listarView);
router.get("/posts/read/:nome_categoria", Post.listarPostCat);
router.get("/posts/readData/:data", Post.listarPostData);
router.post("/posts/create", Post.cadastrarPost);
router.put("/posts/update", Post.alterarPost);
router.delete("/posts/delete/:id_pub", Post.excluirPost);

module.exports = router;
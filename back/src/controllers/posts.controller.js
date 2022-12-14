const con = require('../forumDAO.js');
const multer = require('multer');
const upload = multer().single('imagem');

const Post = require('../models/Post.model');


const listarPosts = (req, res) => {
    con.query(Post.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(Post.toAscii(result)).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarView = (req, res) => {
    con.query(Post.toReadView(), (err, result) => {
        if (err == null) {
            res.status(200).json(Post.toAscii(result)).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarPostCat= (req, res) => {
    con.query(Post.toReadCat(req.params), (err, result) => {
        if (err == null) {
            if (result.length > 0)
                res.json(Post.toAscii(result)).end();
            else
                res.status(404).end();
        }
    });
}

const listarPostData = (req, res) => {
    con.query(Post.toReadData(req.params), (err, result) => {
        if (err == null) {
            if (result.length > 0)
                res.json(Post.toAscii(result)).end();
            else
                res.status(404).end();
        }
    });
}

const cadastrarPost= (req, res) => {
    upload(req, res, (err) => {
        if (err)
            res.status(500).json({ error: 1, payload: err }).end();
        else {
            con.query(Post.toCreate(req.body, req.arquivo), (err, result) => {
                if (err == null){
                    res.redirect('http://127.0.0.1:5500/front/pages/home/home.html')
                }else{
                    res.status(400).json(err).end();
                }
            })
        }
    })
}

const alterarPost = (req, res) => {
    con.query(Post.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirPost = (req, res) => {
    con.query(Post.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).json(req.params).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    })
}

module.exports = {
    listarPosts,
    listarView,
    listarPostCat,
    listarPostData,
    cadastrarPost,
    alterarPost,
    excluirPost
}
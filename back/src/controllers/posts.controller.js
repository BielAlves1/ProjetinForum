const con = require('../forumDAO.js');
const Post = require('../models/Post.model');


const listarPosts = (req, res) => {
    con.query(Post.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
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

const cadastrarPost = async (req, res) => {
    con.query(Post.toCreate(req.body, req.file), (err, result) => {
        if (err == null) {
            res.status(201).end(result);
        } else {
            res.status(400).json(err).end();
        }
    });
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
    listarPostData,
    cadastrarPost,
    alterarPost,
    excluirPost
}
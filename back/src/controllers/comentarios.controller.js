const con = require('../forumDAO.js');
const Comentario = require('../models/Comentario.model');


const listarComentarios = (req, res) => {
    con.query(Comentario.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarComentario = async (req, res) => {
    con.query(Comentario.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end(result);
        } else {
            res.status(400).json(err).end();
        }
    });
}

const alterarComentario = (req, res) => {
    con.query(Comentario.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirComentario = (req, res) => {
    con.query(Comentario.toDelete(req.params), (err, result) => {
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
    listarComentarios,
    cadastrarComentario,
    alterarComentario,
    excluirComentario
}
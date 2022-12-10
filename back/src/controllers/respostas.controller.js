const con = require('../forumDAO.js');
const Resposta = require('../models/Resposta.model');


const listarRespostas = (req, res) => {
    con.query(Resposta.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarResposta = async (req, res) => {
    con.query(Resposta.toCreate(req.body, req.file), (err, result) => {
        if (err == null) {
            res.status(201).end(result);
        } else {
            res.status(400).json(err).end();
        }
    });
}

const alterarResposta = (req, res) => {
    con.query(Resposta.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirResposta = (req, res) => {
    con.query(Resposta.toDelete(req.params), (err, result) => {
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
    listarRespostas,
    cadastrarResposta,
    alterarResposta,
    excluirResposta
}
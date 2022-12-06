const con = require('../forumDAO.js');
const Categoria = require('../models/Categoria.model');


const listarCategorias = (req, res) => {
    con.query(Categoria.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarCategoria = (req, res) => {
    con.query(Categoria.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const excluirCategoria = (req, res) => {
    con.query(Categoria.toDelete(req.params), (err, result) => {
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
    listarCategorias,
    cadastrarCategoria,
    excluirCategoria
}
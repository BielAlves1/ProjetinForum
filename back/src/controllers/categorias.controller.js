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

module.exports = {
    listarCategorias,
    cadastrarCategoria,
}
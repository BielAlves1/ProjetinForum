const con = require('../forumDAO.js');
const SubCategoria = require('../models/SubCategoria.model');


const listarSubCategorias = (req, res) => {
    con.query(SubCategoria.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarSubCategoria = (req, res) => {
    con.query(SubCategoria.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarSubCategorias,
    cadastrarSubCategoria,
}
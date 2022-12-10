const con = require('../forumDAO.js');
const Usuario = require('../models/Usuario.model');
const multer = require('multer');
const upload = multer().single('foto')


const listarUsuarios = (req, res) => {
    con.query(Usuario.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(Usuario.toAscii(result)).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarUsuario = (req, res) => {
    con.query(Usuario.toReadUserName(req.params), (err, result) => {
        if (err == null) {
            if (result.length > 0)
                res.json(Usuario.toAscii(result)).end();
            else
                res.status(404).end();
        }
    });
}

const login = (req, res) => {
    user = req.body;

    con.query(Usuario.toLogin(user), (err, result) => {
        if (err == null) {
            if (user.email == result[0].email && user.senha == result[0].senha)
                res.status(200).json(Usuario.toAscii(result)).end();
            else
                res.status(400).json(err).end();
        }
    });
}

const cadastrarUsuario = async (req, res) => {
    upload(req, res, (err) => {
    con.query(Usuario.toCreate(req.body, req.file), (err, result) => {
        if (err == null) {
            res.status(201).end(result);
        } else {
            res.status(400).json(err).end();
        }
    });
})
}

const alterarUsuario = (req, res) => {
    con.query(Usuario.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirUsuario = (req, res) => {
    con.query(Usuario.toDelete(req.params), (err, result) => {
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
    listarUsuarios,
    listarUsuario,
    login,
    cadastrarUsuario,
    alterarUsuario,
    excluirUsuario
}
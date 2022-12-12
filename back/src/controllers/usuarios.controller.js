const con = require('../forumDAO.js');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario.model');
require('dotenv').config();

const listarView = (req, res) => {
    con.query(Usuario.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const listarUsuarios = (req, res) => {
    con.query(Usuario.toRead(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        } else {
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
    const user = req.body;
    con.query(Usuario.toLogin(user), (err, result) => {
        if (err == null) {
            if (user.email == result[0].email && user.senha == result[0].senha) {
                let retorno = {
                    "id_user": result[0].id_user,
                    "id_role": result[0].id_role,
                    "email": result[0].email,
                    "nome_user": result[0].nome_user
                }
                jwt.sign(retorno, process.env.KEY, (err, token) => {
                    if (err == null) {
                        retorno["token"] = token;
                        res.status(200).json(retorno).end();
                    } else {
                        res.status(404).json(err).end();
                    }
                });
            }
        } else {
            res.status(400).json(err).end()
        }
    })
}

const cadastrarUsuario = (req, res) => {
    con.query(Usuario.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json().end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const cadastrarPerfilUsuario = (req, res) => {
    upload(req, res, (err) => {
        con.query(Usuario.toCreatePerfil(req.body, req.file), (err, result) => {
            if (err == null) {
                res.status(201).end(Usuario.toAscii(result));
            } else {
                res.status(400).json(err).end();
            }
        });
    })
}

const alterarUsername = (req, res) => {
    con.query(Usuario.toUpdateUsername(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const alterarPassword = (req, res) => {
    con.query(Usuario.toUpdatePassword(req.body), (err, result) => {
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
    listarView,
    listarUsuarios,
    listarUsuario,
    login,
    cadastrarUsuario,
    cadastrarPerfilUsuario,
    alterarUsername,
    alterarPassword,
    excluirUsuario
}
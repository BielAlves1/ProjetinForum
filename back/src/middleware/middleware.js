const jwt = require('jsonwebtoken');
require('dotenv').config();

const validarUserAdmin = (req, res, next) => {

    const token = req.headers.authorization;

    jwt.verify(token, process.env.KEY, (err, data) => {
        if(err != null){
            res.status(404).json(err).end();
        }else{
            if(data.id_role == 1 || req.body.id_user == data.id_user){
                next();
            }else{
                res.status(401).json({msg:"Erro de permissão"}).end();
            }
        }
    })
};

const validarAdmin = (req, res, next) => {

    const token = req.headers.authorization;

    jwt.verify(token, process.env.KEY, (err, data) => {
        if(err != null){
            res.status(404).json(err).end();
        }else{
            if(data.id_role == 1){
                next();
            }else{
                res.status(401).json({msg:"Erro de permissão"}).end();
            }
        }
    })
};

const validarUser = (req, res, next) => {

    const token = req.headers.authorization;

    jwt.verify(token, process.env.KEY, (err, data) => {
        if(err != null){
            res.status(404).json(err).end();
        }else{
            if(req.body.id_user == data.id_user){
                next();
            }else{
                res.status(401).json({msg:"Erro de permissão"}).end();
            }
        }
    })
}

module.exports = {
    validarUserAdmin,
    validarAdmin,
    validarUser
}
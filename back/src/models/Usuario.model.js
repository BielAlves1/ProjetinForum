const toCreate = (dados, arquivo) =>{
    dados.avatar =  arquivo.buffer.toString('base64');
    return `INSERT INTO usuarios VALUES (default,'${dados.email}','${dados.senha}', '${dados.nome_user}', '${dados.avatar}')`;
}

const toAscii = (dados)=>{
    dados.forEach(data => {
        if(data.avatar != null) data.avatar = data.avatar.toString('ascii');
    });
    return dados;
}

const toReadAll = () => {
    return 'SELECT * FROM usuarios';
}

const toReadUserName = (model) => {
    return `SELECT * FROM usuarios WHERE nome_user like '%${model.nome_user}%'`;
}

const toLogin = (model) => {
    return `SELECT * FROM usuarios WHERE email = '${model.email}'`;
}

const toUpdate = (model) => {
    return `UPDATE usuarios SET 
    senha = '${model.senha}', 
    nome_user = '${model.nome_user}' 
    WHERE id_user = '${model.id_user}'`;
}

const toDelete = (model) => {
    return `DELETE FROM usuarios WHERE id_user = '${model.id_user}'`;
}

module.exports = {
    toCreate,
    toAscii,
    toReadAll,
    toReadUserName,
    toLogin,
    toUpdate,
    toDelete
}
const toReadAll = () => {
    return 'SELECT * FROM vw_perfilUser';
}

const toRead = () => {
    return 'SELECT * FROM usuarios';
}

const toReadUserName = (model) => {
    return `SELECT * FROM vw_perfilUser WHERE nome_user like '%${model.nome_user}%'`;
}

const toLogin = (model) => {
    return `SELECT * FROM usuarios WHERE email = '${model.email}' and senha = '${model.senha}'`;
}

const toCreate = (model) => {
    return `INSERT INTO usuarios value(default, '${model.id_role}', '${model.email}', '${model.senha}', '${model.nome_user}')`;
}

const toCreatePerfil = (dados, arquivo) =>{
    dados.avatar =  arquivo.buffer.toString('base64');
    return `INSERT INTO profiles VALUE('${dados.id_user}','${dados.bio}', '${dados.avatar}')`;
}

const toAscii = (dados)=>{
    dados.forEach(data => {
        if(data.avatar != null) data.avatar = data.avatar.toString('ascii');
    });
    return dados;
}

const toUpdateUsername = (model) => {
    return `UPDATE usuarios SET 
    nome_user = '${model.nome_user}'
    WHERE id_user = '${model.id_user}'`;
}

const toUpdatePassword = (model) => {
    return `UPDATE usuarios SET 
    senha = '${model.senha}'
    WHERE id_user = '${model.id_user}'`;
}

const toDelete = (model) => {
    return `DELETE FROM usuarios WHERE id_user = '${model.id_user}'`;
}

module.exports = {
    toReadAll,
    toRead,
    toReadUserName,
    toLogin,
    toCreate,
    toCreatePerfil,
    toAscii,
    toUpdateUsername,
    toUpdatePassword,
    toDelete
}
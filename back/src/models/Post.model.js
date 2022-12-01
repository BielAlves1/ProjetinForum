const toCreate = (dados, arquivo) =>{
    dados.img =  arquivo.buffer.toString('base64');
    return `INSERT INTO posts VALUES (default,'${dados.id_user}', '${dados.id_subcat}', curdate(), '${dados.pergunta}',  '${dados.img}')`;
}

const toAscii = (dados)=>{
    dados.forEach(data => {
        if(data.img != null) data.img = data.img.toString('ascii');
    });
    return dados;
}

const toReadAll = () => {
    return 'SELECT * FROM posts';
}

const toReadUserName = (model) => {
    return `SELECT * FROM posts WHERE data like '%${model.data}%'`;
}

const toUpdate = (model) => {
    return `UPDATE usuarios SET 
    senha = '${model.senha}', 
    nome_user = '${model.nome_user}' 
    WHERE id_user = '${model.id_user}'`;
}

const toDelete = (model) => {
    return `DELETE FROM posts WHERE id_pub = '${model.id_pub}'`;
}

module.exports = {
    toCreate,
    toAscii,
    toReadAll,
    toReadUserName,
    toUpdate,
    toDelete
}
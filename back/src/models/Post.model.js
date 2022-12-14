const toCreate = (model, arquivo) =>{
    if (arquivo != null){
        model.img = arquivo.buffer.toString('base64');
        return `INSERT INTO posts VALUES (default, '${model.id_user}', '${model.id_subcat}', curdate(), '${model.conteudo}', '${model.img}')`;
    }else{
        return `INSERT INTO posts VALUES (default, '${model.id_user}', '${model.id_subcat}', curdate(), '${model.conteudo}', null)`;
    }
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

const toReadView = () => {
    return 'SELECT * FROM vw_posts';
}

const toReadCat = (model) => {
    return `SELECT * FROM vw_geral WHERE nome_categoria like '%${model.nome_categoria}%'`;
}

const toReadData = (model) => {
    return `SELECT * FROM vw_geral WHERE data like '%${model.data}%'`;
}

const toUpdate = (model) => {
    return `UPDATE posts SET 
    conteudo = '${model.conteudo}'
    WHERE id_pub = '${model.id_pub}'`;
}

const toDelete = (model) => {
    return `DELETE FROM posts WHERE id_pub = '${model.id_pub}'`;
}

module.exports = {
    toReadAll,
    toReadView,
    toReadCat,
    toReadData,
    toCreate,
    toAscii,
    toUpdate,
    toDelete
}
const toCreate = (model) =>{
    return `INSERT INTO posts VALUES (default, '${model.id_user}', '${model.id_subcat}', curdate(), '${model.conteudo}', ${model.likes}, ${model.dislikes})`;
}

const toReadAll = () => {
    return 'SELECT * FROM posts';
}

const toReadView = () => {
    return 'SELECT * FROM vw_geral';
}

const toReadCat = (model) => {
    return `SELECT * FROM vw_geral WHERE nome_categoria like '%${model.nome_categoria}%'`;
}

const toReadData = (model) => {
    return `SELECT * FROM vw_geral WHERE data like '%${model.data}%'`;
}

const toCreateImg = (dados, arquivo) =>{
    dados.img =  arquivo.buffer.toString('base64');
    return `INSERT INTO img_posts VALUE('${dados.id_pub}', '${dados.img}')`;
}

const toAscii = (dados)=>{
    dados.forEach(data => {
        if(data.img != null) data.img = data.img.toString('ascii');
    });
    return dados;
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
    toCreateImg,
    toAscii,
    toUpdate,
    toDelete
}
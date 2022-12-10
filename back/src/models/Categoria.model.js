const toCreate = (model) =>{
    return `INSERT INTO categorias VALUES (default,'${model.nome_categoria}','${model.descricao}')`;
}

const toReadAll = () => {
    return 'SELECT * FROM categorias';
}

const toDelete = (model) => {
    return `DELETE FROM categorias WHERE id_categoria = '${model.id_subcat}'`;
}

module.exports = {
    toCreate,
    toReadAll,
    toDelete
}
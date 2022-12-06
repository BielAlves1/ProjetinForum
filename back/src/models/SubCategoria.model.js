const toCreate = (model) =>{
    return `INSERT INTO sub_categorias VALUES (default, '${model.id_categoria}', '${model.nome_subcat}','${model.descricao}')`;
}

const toReadAll = () => {
    return 'SELECT * FROM sub_categorias';
}

const toDelete = (model) => {
    return `DELETE FROM sub_categorias WHERE id_subcat = '${model.id_subcat}'`;
}

module.exports = {
    toCreate,
    toReadAll,
    toDelete
}
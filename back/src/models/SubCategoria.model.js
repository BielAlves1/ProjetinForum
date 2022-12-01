const toCreate = (model) =>{
    return `INSERT INTO sub_categorias VALUES (default, '${model.id_categoria}', '${model.nome_subcat}','${model.descricao}')`;
}

const toReadAll = () => {
    return 'SELECT * FROM sub_categorias';
}

module.exports = {
    toCreate,
    toReadAll
}
const toCreate = (model) =>{
    return `INSERT INTO categorias VALUES (default,'${model.nome_categoria}','${model.descricao}')`;
}

const toReadAll = () => {
    return 'SELECT * FROM categorias';
}

module.exports = {
    toCreate,
    toReadAll
}
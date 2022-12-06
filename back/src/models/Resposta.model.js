const toCreate = (model) =>{
    return `INSERT INTO respostas VALUES (default,'${model.id_user}', '${model.id_comentario}', '${model.reposta}', curdate(), '${model.likes}',  '${model.deslikes}')`;
}

const toReadAll = () => {
    return 'SELECT * FROM respostas';
}

const toUpdate = (model) => {
    return `UPDATE post SET 
    reposta = '${model.resposta}',
    likes = '${model.likes}',
    deslikes = '${model.deslikes}'
    WHERE id_resp = '${model.id_resp}'`;
}

const toDelete = (model) => {
    return `DELETE FROM respostas WHERE id_resp = '${model.id_resp}'`;
}

module.exports = {
    toCreate,
    toReadAll,
    toUpdate,
    toDelete
}
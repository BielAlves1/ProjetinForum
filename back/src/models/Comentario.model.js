const toCreate = (model) =>{
    return `INSERT INTO comentarios VALUES (default,'${model.id_user}', '${model.id_pub}', '${model.comentario}', curdate(), '${model.likes}',  '${model.deslikes}')`;
}

const toReadAll = () => {
    return 'SELECT * FROM comentarios';
}

const toUpdate = (model) => {
    return `UPDATE comentarios SET 
    comentario = '${model.comentario}',
    likes = '${model.likes}',
    deslikes = '${model.deslikes}'
    WHERE id_comentario = '${model.id_comentario}'`;
}

const toDelete = (model) => {
    return `DELETE FROM comentarios WHERE id_pub = '${model.id_pub}'`;
}

module.exports = {
    toCreate,
    toReadAll,
    toUpdate,
    toDelete
}
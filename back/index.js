const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const usuarioR = require('./src/routes/usuarios.route');
const categoriaR = require('./src/routes/categorias.route');
const subcatR = require('./src/routes/subCats.route');
const postR = require('./src/routes/posts.route');
const comentarioR = require('./src/routes/comentarios.route');

const app = express();
app.use(express.json());
app.use(cors());
app.use(usuarioR);
app.use(categoriaR);
app.use(subcatR);
app.use(postR);
app.use(comentarioR);

app.listen(5000, () => {
    console.log("Alô Alô, tamo on na porta: " + PORT);
});
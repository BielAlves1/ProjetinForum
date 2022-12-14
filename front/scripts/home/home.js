const uri = 'http://localhost:5000/posts';
const modal = document.querySelector(".criarpost");
const modal1 = document.querySelector(".menu");
const modalcomenta = document.querySelector(".comenta");
const card = document.querySelector(".post");
const cadastro = document.querySelector("#cadastro");
const alteracao = document.querySelector("#alteracao");
var avatarBase64 = null;
var posts = [];

const load = () => {
    const options = { method: 'GET' };
    fetch(uri + '/readAll', options)
        .then(resp => resp.json())
        .then(resp => {
            posts = resp
            readCards();
        })
        .catch(err => console.error(err));
}

const readCards = () => {
    posts.forEach(e => {
        let post = card.cloneNode(true);
        post.classList.remove("modalpost");
        post.querySelector("#data").innerHTML += e.data != null ? e.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).replace("T", " ").split(".")[0] : e.data;
        post.querySelector("#conteudo").innerHTML += e.conteudo;
        post.querySelector("#likes").innerHTML += e.conteudo;
        post.querySelector("#dislikes").innerHTML += e.conteudo;
        document.querySelector(".main").appendChild(post);
    });
}


function criarPost() {
    modal.classList.remove("modal");
}

function abrirmenu() {
    modal1.classList.remove("modal1");
}

function comenta() {
    modalcomenta.classList.remove("modalcomenta");
}

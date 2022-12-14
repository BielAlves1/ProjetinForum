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
            let usuario = localStorage.getItem('info');
            usuario = JSON.parse(usuario);
            document.querySelector("#nome").innerHTML = usuario.nome_user;     
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
        document.querySelector(".main").appendChild(post);
    });
}

const postar = document.querySelector(".criarpost");

postar.addEventListener('submit', (e) => {
	e.preventDefault();
    const post = {
        id_user: innerHTML = usuario.id_user,
        id_sub_cat: innerHTML = postar.id_sub_cat.value,
        conteudo: innerHTML = postar.conteudo.value,
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    };
    fetch("http://localhost:5000/posts/create", options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201)
                window.location.reload();
            else
                alert("Erro ao enviar dados para o servidor, erro: "+resp)
        })
        .catch(err => console.error(err));
});


function criarPost() {
    modal.classList.remove("modal");
}

function abrirmenu() {
    modal1.classList.remove("modal1");
}

function comenta() {
    modalcomenta.classList.remove("modalcomenta");
}

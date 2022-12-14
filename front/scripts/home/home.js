const uripost = 'http://localhost:5000/posts'; 
const urisub_cat = 'http://localhost:5000/subCategorias'; 
const modal = document.querySelector(".criarpost")
const modal1 = document.querySelector(".menu")
const modalcomenta = document.querySelector(".comenta")
const card = document.querySelector('.post');
var posts = [];

const load = () => {
    const options = { method: 'GET' };
    fetch(uripost + '/readAll', options)
        .then(resp => resp.json())
        .then(resp => {
            posts = resp
            readCards();
        })
        .catch(err => console.error(err));
}

const readCards = () => {
    posts.forEach(e => {
        let posts = card.cloneNode(true);
        posts.classList.remove("modalpost");
        posts.querySelector("#conteudo").innerHTML += e.conteudo;
        posts.querySelector("#likes").innerHTML += e.likes;
        posts.querySelector("#dislikes").innerHTML += e.dislikes;
        posts.querySelector(".main").appendChild(posts);
    });
}

function filtrar() {
    var termo = $('#pesquisa').val().toUpperCase();
    $(urisub_cat).each(function() { 
       if($(this).html().toUpperCase().indexOf(termo) === -1) {
           $(this).hide();
       }
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

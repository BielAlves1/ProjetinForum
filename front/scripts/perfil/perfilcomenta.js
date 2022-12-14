const uripost = 'http://localhost:5000/comentarios/readAll';
const card = document.querySelector('.post');
var comentarios = [];

const load = () => {
    const options = { method: 'GET' };
    fetch(uripost, options)
        .then(resp => resp.json())
        .then(resp => {
            comentarios = resp
            readCards();
        })
        .catch(err => console.error(err));
}

const readCards = () => {
    comentarios.forEach(e => {
        let comentario = card.cloneNode(true);
        comentario.classList.remove("modalpost");
        comentario.querySelector("#conteudo").innerHTML += e.conteudo;
        comentario.querySelector("#likes").innerHTML += e.likes;
        comentario.querySelector("#dislikes").innerHTML += e.dislikes;
        comentario.querySelector(".main").appendChild(comentario);
    });
}

function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }  
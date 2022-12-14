const uripost = 'http://localhost:5000/respostas/readAll';
const card = document.querySelector('.post');
var respostas = [];

const load = () => {
    const options = { method: 'GET' };
    fetch(uripost, options)
        .then(resp => resp.json())
        .then(resp => {
            respostas = resp
            readCards();
        })
        .catch(err => console.error(err));
}

const readCards = () => {
    respostas.forEach(e => {
        let resposta = card.cloneNode(true);
        resposta.classList.remove("modalpost");
        resposta.querySelector("#conteudo").innerHTML += e.conteudo;
        resposta.querySelector("#likes").innerHTML += e.likes;
        resposta.querySelector("#dislikes").innerHTML += e.dislikes;
        resposta.querySelector(".main").appendChild(resposta);
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
const uricomenta = 'http://localhost:5000/comentarios/read';
const card = document.querySelector('.post');
var comentarios = [];

const load = () => {
    const options = { method: 'GET' };
    fetch(uricomenta, options)
        .then(resp => resp.json())
        .then(resp => {
            comentarios = resp
            readCards();
        })
        .catch(err => console.error(err));
}

const readCards = () => {
    comentarios.forEach(e => {
        let comenta = card.cloneNode(true);
        comenta.classList.remove(".modalpost");
        comenta.querySelector("#conteudo").innerHTML += e.comentario;
        comenta.querySelector("#data").innerHTML += e.data != null ? e.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).replace("T", " ").split(".")[0] : e.data;
        comenta.querySelector("main").appendChild(comenta);
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
const uriresp = 'http://localhost:5000/respostas/read';
const card = document.querySelector('.post');
var respostas = [];

const load = () => {
    const options = { method: 'GET' };
    fetch(uriresp, options)
        .then(resp => resp.json())
        .then(resp => {
            respostas = resp
            readCards();
        })
        .catch(err => console.error(err));
}

const readCards = () => {
    respostas.forEach(e => {
        let resp = card.cloneNode(true);
        resp.classList.remove("modalpost");
        resp.querySelector("#conteudo").innerHTML += e.resposta;
        resp.querySelector("#data").innerHTML += e.data != null ? e.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).replace("T", " ").split(".")[0] : e.data;
        resp.querySelector("main").appendChild(resp);
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
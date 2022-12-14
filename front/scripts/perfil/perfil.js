const uri = 'http://localhost:5000/posts';
const card = document.querySelector(".post");
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
        document.querySelector("main").appendChild(post);
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
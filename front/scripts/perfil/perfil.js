const uripost = 'http://localhost:5000/posts/readAll';
const card = document.querySelector('.post');
var posts = [];

const load = () => {
    const options = { method: 'GET' };
    fetch(uripost, options)
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

function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }  
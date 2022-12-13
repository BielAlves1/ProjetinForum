const modal = document.querySelector(".criarpost")
const modal1 = document.querySelector(".menu")
const modalpost = document.querySelector(".menupost")
const modalcomenta = document.querySelector(".comenta")

function criarPost() {
    modal.classList.remove("modal");
}

function abrirmenu() {
    modal1.classList.remove("modal1");
}

function abrirmenupost() {
    modalpost.classList.remove("modalpost");
}

function comenta() {
    modalcomenta.classList.remove("modalcomenta");
}

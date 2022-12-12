function login() {
    let credenciais = {
        "email": document.querySelector(".email").value,
        "senha": document.querySelector(".senha").value,
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    options.body = JSON.stringify(credenciais);
    fetch("http://localhost:5000/usuarios/login", options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 200) {
                window.location.href = "../../pages/home/home.html";
            }
            else {
                alert("Email ou Senha Incorretas")
            }
        })
};
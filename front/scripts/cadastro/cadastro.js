const cadastro = document.querySelector("#cadastro");
var usuarios = [];

cadastro.addEventListener('submit', (e) => {
	e.preventDefault();
    const usuario = {
        id_role: 2,
        email: cadastro.email.value,
        senha: cadastro.senha.value,
        nome_user: cadastro.nome.value
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    };
    fetch("http://localhost:5000/usuarios/create", options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201)
                window.location.reload();
            else
                alert("Erro ao enviar dados para o servidor, erro: "+resp)
        })
        .catch(err => console.error(err));
});
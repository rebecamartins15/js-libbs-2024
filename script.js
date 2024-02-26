const nomeProduto = document.getElementById('produto');
const quantidade = document.getElementById('qntd');
const usuario = document.getElementById('user');
const btnAdd = document.querySelector("btn");

btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const produto = {
        nomeDoProduto: nomeProduto.value,
        estoqueProduto: quantidade.value,
        usuarioRespon: usuario.value,
    };

    nomeProduto.value = "";
    quantidade.value = "";
    usuario.value = "";

    console.log(produto);
});


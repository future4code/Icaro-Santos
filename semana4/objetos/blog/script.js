const postagem = {
    titulo: document.getElementById("titulo"),
    autor: document.getElementById("autor"),
    post: document.getElementById("post"),
    botao: document.getElementById("enviar"),
    secaoPost: document.getElementById("secao-post")
}

function enviar(evento){
    if(postagem.titulo.value !== "" && postagem.titulo.value !== " " && postagem.autor.value !== "" && postagem.autor.value !== " " && postagem.post.value !== "" && postagem.post.value !== " "){
        postagem.secaoPost.innerHTML += "<h1 class='novo-post'>" + postagem.titulo.value + "</h1>";
        postagem.secaoPost.innerHTML += "<h3>" + postagem.autor.value + "</h3>";
        postagem.secaoPost.innerHTML += "<p>" + postagem.post.value + "</p>";
        postagem.titulo.value = "";
        postagem.autor.value = "";
        postagem.post.value = "";
    }   
}
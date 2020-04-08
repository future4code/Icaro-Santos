let listaDomingo = document.getElementById("lista-domingo");
let listaSegunda = document.getElementById("lista-segunda");
let listaTerca = document.getElementById("lista-terca");
let listaQuarta = document.getElementById("lista-quarta");
let listaQuinta = document.getElementById("lista-quinta");
let listaSexta = document.getElementById("lista-sexta");
let listaSabado = document.getElementById("lista-sabado");
let meuInput = document.getElementById("tarefa");

function adicionarTarefa(){
    let diaDaSemanaIndex = document.getElementById("semana").selectedIndex;
    let horasIndex = document.getElementById("horas").selectedIndex;
    let horas = document.getElementById("horas").options;
    if (meuInput.value === "" || meuInput.value === " "){
        alert("Digite alguma coisa");
    }else{
        if(diaDaSemanaIndex === 0) {
            listaDomingo.innerHTML += "<li onclick='mudarBagulho(this)'>" + horas[horasIndex].value + meuInput.value + "</li>"
        }else if(diaDaSemanaIndex === 1){
            listaSegunda.innerHTML += "<li onclick='mudarBagulho(this)'>" + horas[horasIndex].value + meuInput.value + "</li>"
        }
        else if(diaDaSemanaIndex === 2){
            listaTerca.innerHTML += "<li onclick='mudarBagulho(this)'>" + horas[horasIndex].value + meuInput.value + "</li>"
        }
        else if(diaDaSemanaIndex === 3){
            listaQuarta.innerHTML += "<li onclick='mudarBagulho(this)'>" + horas[horasIndex].value + meuInput.value + "</li>"
        }
        else if(diaDaSemanaIndex === 4){
            listaQuinta.innerHTML += "<li onclick='mudarBagulho(this)'>" + horas[horasIndex].value + meuInput.value + "</li>"
        }
        else if(diaDaSemanaIndex === 5){
            listaSexta.innerHTML += "<li onclick='mudarBagulho(this)'>" + horas[horasIndex].value + meuInput.value + "</li>"
        }
        else if(diaDaSemanaIndex === 6){
            listaSabado.innerHTML += "<li onclick='mudarBagulho(this)'>" + horas[horasIndex].value + meuInput.value + "</li>"
        }
        meuInput.value = "";
    }
}

function apagarTudo(){
    let diaDaSemanaIndex = document.getElementById("semana").selectedIndex;
    if(diaDaSemanaIndex === 0) {
        listaDomingo.innerHTML = ""
    }else if(diaDaSemanaIndex === 1){
        listaSegunda.innerHTML = ""
    }
    else if(diaDaSemanaIndex === 2){
        listaTerca.innerHTML = ""
    }
    else if(diaDaSemanaIndex === 3){
        listaQuarta.innerHTML = ""
    }
    else if(diaDaSemanaIndex === 4){
        listaQuinta.innerHTML = ""
    }
    else if(diaDaSemanaIndex === 5){
        listaSexta.innerHTML = ""
    }
    else if(diaDaSemanaIndex === 6){
        listaSabado.innerHTML = ""
    }
}

function mudarBagulho(lista){
    if(lista.classList.contains("feito")){
        lista.classList.remove("feito");
    }else{
        lista.classList.add("feito");
    }
}
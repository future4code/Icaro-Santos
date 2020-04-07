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
        if(diaDaSemanaIndex === 0) {
            listaDomingo.innerHTML += "<li>" + meuInput.value + "</li>"            
        }else if(diaDaSemanaIndex === 1){
            listaSegunda.innerHTML += "<li>" + meuInput.value + "</li>"
        }
        else if(diaDaSemanaIndex === 2){
            listaTerca.innerHTML += "<li>" + meuInput.value + "</li>"
        }
        else if(diaDaSemanaIndex === 3){
            listaQuarta.innerHTML += "<li>" + meuInput.value + "</li>"
        }
        else if(diaDaSemanaIndex === 4){
            listaQuinta.innerHTML += "<li>" + meuInput.value + "</li>"
        }
        else if(diaDaSemanaIndex === 5){
            listaSexta.innerHTML += "<li>" + meuInput.value + "</li>"
        }
        else if(diaDaSemanaIndex === 6){
            listaSabado.innerHTML += "<li>" + meuInput.value + "</li>"
        }
        meuInput.value = "";
}
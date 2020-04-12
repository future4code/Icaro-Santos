const cadastro = {
    inputValor: document.getElementById("input-valor"),
    inputTipo: document.getElementById("input-tipo"),
    inputDescricao: document.getElementById("input-descricao"), 
    botaoCadastrar: document.getElementById("botao-cadastrar")
}

const detalhes = {
    divDetalhes: document.getElementById("detalhes-despesas"),
    inputTipoFiltro: document.getElementById("input-tipo-filtro"),
    inputValorMinimo: document.getElementById("input-valor-minimo"),
    inputValorMaximo: document.getElementById("input-valor-maximo"),
    botaoFiltros: document.getElementById("botao-filtros"),
    botaoLimparFiltros: document.getElementById("botao-limpar-filtros")
}

const extrato = {
    divExtrato: document.getElementById("extrato")
}

let valorTotal = 0;
let salvar = [];

function valorIncorreto(){
    alert("Coloque valores corretos");
    cadastro.inputValor.value = "";
    cadastro.inputDescricao.value = "";
    cadastro.inputTipo.value = "";  
}

function imprimirDespesas(){
    detalhes.divDetalhes.innerHTML = "";
    for (i = 0; i < salvar.length; i++){
        detalhes.divDetalhes.innerHTML += "<p>Descrição: " + salvar[i].descricao + "</p>";
        detalhes.divDetalhes.innerHTML += "<p>Tipo: " + salvar[i].tipo + "</p>";
        detalhes.divDetalhes.innerHTML += "<p>Valor: R$" + salvar[i].valor + "</p>";
    }
}

function cadastrarDespesa(evento){
    if(cadastro.inputDescricao.value === "" || cadastro.inputDescricao.value === " " || isNaN(Number.parseFloat(cadastro.inputValor.value))){
        valorIncorreto();
    }else{
        salvar.push({descricao: cadastro.inputDescricao.value, tipo: cadastro.inputTipo.options[cadastro.inputTipo.selectedIndex].text, valor: Number.parseFloat(cadastro.inputValor.value)}); 
        valorTotal += Number.parseFloat(cadastro.inputValor.value);
        imprimirDespesas();
        extrato.divExtrato.innerHTML = "<h1>Extrato</h1>";
        extrato.divExtrato.innerHTML += "<h2>Valor total</h2>";
        extrato.divExtrato.innerHTML += "<p>R$ " + valorTotal + "</p>";
        cadastro.inputValor.value = "";
        cadastro.inputDescricao.value = "";
        cadastro.inputTipo.value = "";
    }
        
}


function filtrosDespesas(evento){
    const filtrarCoisas = salvar.filter(valor => {
        return valor.valor >= detalhes.inputValorMinimo.value && valor.valor <= detalhes.inputValorMaximo.value;
    })
    detalhes.divDetalhes.innerHTML = "";
    for (i = 0; i < salvar.length; i++){
        detalhes.divDetalhes.innerHTML += "<p>Descrição: " + filtrarCoisas[i].descricao + "</p>";
        detalhes.divDetalhes.innerHTML += "<p>Tipo: " + filtrarCoisas[i].tipo + "</p>";
        detalhes.divDetalhes.innerHTML += "<p>Valor: R$" + filtrarCoisas[i].valor + "</p>";
    }
}

function limparFiltros(evento){
    imprimirDespesas();
}
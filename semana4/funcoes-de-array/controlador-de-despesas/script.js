const cadastro = {
    inputValor: document.getElementById("input-valor"),
    inputTipo: document.getElementById("input-tipo"),
    inputDescricao: document.getElementById("input-descricao"), 
    botaoCadastrar: document.getElementById("botao-cadastrar")
}

const detalhes = {
    divDetalhes: document.getElementById("detalhes"),
    inputTipoFiltro: document.getElementById("input-tipo-filtro"),
    inputValorMinimo: document.getElementById("input-valorMinimo"),
    inputValorMaximo: document.getElementById("input-valorMaximo"),
    botaoFiltros: document.getElementById("botao-filtros"),
    botaoLimparFiltros: document.getElementById("botao-limpar-filtros")
}

const extrato = {
    divExtrato: document.getElementById("extrato")
}

let valorTotal = 0;


function cadastrarDespesa(evento){
    detalhes.divDetalhes.innerHTML += "<p>Descrição: " + cadastro.inputDescricao.value + "</p>" + "<p>Tipo de compra: " + cadastro.inputTipo.options[cadastro.inputTipo.selectedIndex].text + "</p>" + "<p>Valor: R$" + Number.parseFloat(cadastro.inputValor.value) + "</p>"
    valorTotal += Number.parseFloat(cadastro.inputValor.value);
    extrato.divExtrato.innerHTML = "<h1>Extrato</h1>";
    extrato.divExtrato.innerHTML += "<h2>Valor total</h2>";
    extrato.divExtrato.innerHTML += "<p>R$ " + valorTotal + "</p>";
    cadastro.inputValor.value = "";
    cadastro.inputDescricao.value = "";
    cadastro.inputTipo.value = "";    
}


function filtrosDespesas(evento){
    
}

function  limparFiltros(evento){
    detalhes.inputValorMinimo.value = "";
    detalhes.inputValorMaximo.value = "";
}
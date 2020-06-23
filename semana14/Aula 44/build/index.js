let meuNumero = "Olá";
var CoresArcoIris;
(function (CoresArcoIris) {
    CoresArcoIris["vermelho"] = "vermelho";
    CoresArcoIris["laranja"] = "laranja";
    CoresArcoIris["amarelo"] = "amarelo";
    CoresArcoIris["verde"] = "verde";
    CoresArcoIris["azul"] = "azul";
    CoresArcoIris["turquesa"] = "turquesa";
    CoresArcoIris["violeta"] = "violeta";
})(CoresArcoIris || (CoresArcoIris = {}));
const icaro = {
    nome: "Icaro",
    idade: 23,
    corFavorita: CoresArcoIris.azul
};
const melissa = {
    nome: "Melissa",
    idade: 20,
    corFavorita: CoresArcoIris.turquesa
};
const fernanda = {
    nome: "Fernanda",
    idade: 35,
    corFavorita: CoresArcoIris.verde
};
var Era;
(function (Era) {
    Era["ac"] = "AC";
    Era["dc"] = "DC";
})(Era || (Era = {}));
function mostraEra(ano, era) {
    let identificaEra = era;
    if (era === undefined) {
        identificaEra = Era.dc;
    }
    else {
        identificaEra = era;
    }
    if (identificaEra === "AC") {
        if (ano > 4000) {
            return "Pré-Histórica";
        }
        else {
            return "Idade Antiga";
        }
    }
    else {
        if (ano < 476) {
            return "Idade Antiga";
        }
        else if (ano >= 476 && ano < 1453) {
            return "Idade Média";
        }
        else {
            return "Idade Contemporânea";
        }
    }
}
console.log(mostraEra(400, Era.ac));
console.log(mostraEra(400, Era.dc));
console.log(mostraEra(5000, Era.ac));
console.log(mostraEra(2020, Era.dc));
console.log(mostraEra(1, Era.dc));
console.log(mostraEra(500, Era.dc));
console.log(mostraEra(1, Era.ac));
//# sourceMappingURL=index.js.map
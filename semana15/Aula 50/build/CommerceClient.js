"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommerceClient = void 0;
const Place_1 = require("./Place");
class CommerceClient extends Place_1.Commerce {
    constructor(name, registrationNumber, consumedEnergy, cnpj, floorsQuantity, cep) {
        super(floorsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
    calculateBill() {
        return this.consumedEnergy * 0.53;
    }
}
exports.CommerceClient = CommerceClient;

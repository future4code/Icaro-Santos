"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustrialClient = void 0;
const Place_1 = require("./Place");
class IndustrialClient extends Place_1.Industry {
    constructor(name, registrationNumber, consumedEnergy, individualRegistration, machinesQuantity, cep) {
        super(machinesQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.individualRegistration = individualRegistration;
    }
    getCnpj() {
        return this.individualRegistration;
    }
    calculateBill() {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}
exports.IndustrialClient = IndustrialClient;

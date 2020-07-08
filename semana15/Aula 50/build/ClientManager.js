"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientManager = void 0;
class ClientManager {
    constructor() {
        this.clients = [];
        this.clients = [];
    }
    registerClient(client) {
        this.clients.push(client);
    }
    calculateBillOfClient(registrationNumber) {
        const foundClient = this.clients.find((client) => {
            return client.registrationNumber === registrationNumber;
        });
        if (foundClient) {
            return foundClient.calculateBill();
        }
        return 0;
    }
    calculateTotalIncome() {
        let total = 0;
        this.clients.forEach(client => {
            total += client.calculateBill();
        });
        return total;
    }
    deleteClient(registrationNumber) {
        let registrationIndex = undefined;
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].registrationNumber === registrationNumber) {
                registrationIndex = i;
            }
        }
        if (registrationIndex !== undefined) {
            this.clients.splice(registrationIndex, 1);
        }
    }
    getClientsQuantity() {
        return this.clients.length;
    }
}
exports.ClientManager = ClientManager;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const employee_1 = require("./employee");
class Seller extends employee_1.Employee {
    constructor() {
        super(...arguments);
        this.salesQuantity = 0;
    }
    getSalesQuantity() {
        return this.salesQuantity;
    }
    setSalesQuantity(quantity) {
        this.salesQuantity = quantity;
    }
    calculateTotalSalary() {
        return this.baseSalary + employee_1.Employee.BENEFITS_VALUE + (this.salesQuantity * Seller.SELLING_COMISSION);
    }
}
exports.Seller = Seller;
Seller.SELLING_COMISSION = 5;

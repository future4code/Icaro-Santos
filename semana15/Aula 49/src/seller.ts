import {Employee} from './employee'

export class Seller extends Employee {
    private salesQuantity: number = 0
    static SELLING_COMISSION: number = 5

    public getSalesQuantity(): number{
        return this.salesQuantity
    }

    public setSalesQuantity(quantity: number): void{
        this.salesQuantity = quantity
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE + (this.salesQuantity * Seller.SELLING_COMISSION)
    }
}
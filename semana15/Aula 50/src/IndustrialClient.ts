import {Industry} from "./Place"
import {Client} from './Client'

export class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private individualRegistration: string,
        machinesQuantity: number,
        cep: string
    ){
        super(machinesQuantity, cep)
    }

    public getCnpj(): string{
        return this.individualRegistration
    }

    public calculateBill(): number{
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}
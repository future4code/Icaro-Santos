import {User} from './user'

export class Customer extends User {
    public purchaseTotal: number = 0
    private creditCard: string;

    constructor(id: string, email: string, name: string, password: string, creditCard: string){
        super(id, email, name, password);
        console.log("Chamando construtor da classe costumer")
        this.creditCard = creditCard
    }
    
    public getCreditCard(): string{
        return this.creditCard
    }
}
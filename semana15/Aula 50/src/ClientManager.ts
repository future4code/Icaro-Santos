import {Client} from './Client'

export class ClientManager{
    private clients: Client[] = []

    constructor(){
        this.clients = []
    }

    public registerClient(client: Client): void{
        this.clients.push(client)
    }

    public calculateBillOfClient(registrationNumber: number): number{
        const foundClient = this.clients.find((client) => {
            return client.registrationNumber === registrationNumber
        })

        if(foundClient){
            return foundClient.calculateBill()
        }

        return 0
    }

    public calculateTotalIncome(): number{
        let total = 0;
        this.clients.forEach(client => {
            total += client.calculateBill()
        })
        return total
    }

    public deleteClient(registrationNumber: number): void{
        let registrationIndex = undefined

        for(let i = 0; i < this.clients.length; i++){
            if(this.clients[i].registrationNumber === registrationNumber){
                registrationIndex = i
            }
        }

        if(registrationIndex !== undefined){
            this.clients.splice(registrationIndex, 1)
        }
    }

    public getClientsQuantity(): number{
        return this.clients.length
    }
}
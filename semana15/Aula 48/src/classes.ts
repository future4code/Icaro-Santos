import { JSONFileManager } from './JSONFileManager'

export class UserAccount {
    private name: string
    private age: number
    private cpf: string
    private balance: number
    private transactions: Transaction[]

    constructor(name: string, age: number, cpf: string) {
        this.name = name
        this.age = age
        this.cpf = cpf
        this.balance = 0
        this.transactions = []
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    } 

    public getCPF(): string {
        return this.cpf
    } 

    public getBalance(): number {
        return this.balance
    } 

    public getTransactions(): Transaction[] {
        return this.transactions
    } 
}

export class Transaction {
    private date: string
    private value: number
    private description: string

    constructor(date: string, value: number, description: string) {
        this.date = date
        this.value = value
        this.description = description
    }

    public getDate(): string {
        return this.date
    } 
    public getValue(): number {
        return this.value
    } 
    public getDescription(): string {
        return this.description
    } 
}

export class Bank {
    private accounts: UserAccount[]
    private fileManager: JSONFileManager

    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
        this.accounts = accounts
        this.fileManager = fileManager
    }

    public createAccount = (userAccount: UserAccount): void => {

    }

    public getAllAccounts(): UserAccount[] {
        const fileManager: JSONFileManager = new JSONFileManager('accounts.json')
        const userList: any = fileManager.getObjectFromFile()

        return userList
    }

    public getAccountByCpfAndName = (cpf: string, name?: string): UserAccount | undefined => {
        console.log(this.accounts.find(item => {
            return item.getCPF() === cpf
        }))
        return
    }
}
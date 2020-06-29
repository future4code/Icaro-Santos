import * as moment from 'moment'

type account = {
    idade: number,
    cpf: string,
    saldo: number,
    extrato: statement[]
}

type statement = {
    valor: number,
    data: moment.Moment,
    descricao: string
}

const fs = require('fs')

const createAccount = (account: account)  => {

    if(account.idade >= 18){
        const fileName: string = "accounts.json"

        const bufferReader = fs.readFileSync(fileName)

        const bufferText: string = bufferReader.toString()

        const accounts: string[] = JSON.parse(bufferText)

        const newAccount = {
            idade: account.idade,
            cpf: account.cpf,
            saldo: 0,
            extrato: null
        }

        accounts.push(JSON.stringify(newAccount))

        const updateAccounts: string = JSON.stringify(accounts)

        fs.writeFileSync(fileName, updateAccounts)
    }else{
        console.log("Idade deve ser maior ou igual a 18")
    }

    
}

const getAllAccounts = () => {
    const fileName: string = "accounts.json"

    const bufferReader = fs.readFileSync(fileName, "utf-8")

    const accounts: string[] = JSON.parse(bufferReader)

    console.log(accounts)
}

const creatingAccount: account = {
    idade: Number(process.argv[2]),
    cpf: process.argv[3],
    saldo: 0,
    extrato: null
}

getAllAccounts()
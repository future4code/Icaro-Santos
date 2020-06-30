import {JSONFileManager} from './JSONFileManager'
import {UserAccount, Transaction, Bank} from './classes'

const name = process.argv[2]
const age = Number(process.argv[3])
const cpf = process.argv[4]

const newAccount: UserAccount = new UserAccount(name, age, cpf)

const fileManager: JSONFileManager = new JSONFileManager('accounts.json')

const accounts: UserAccount[] = []

const newBank:Bank = new Bank(accounts, fileManager)

console.log(newBank.getAccountByCpfAndName('451.355.598-09'))
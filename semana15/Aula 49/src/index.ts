import {Customer} from './customer'
import {Employee} from './employee'
import {Seller} from './seller'

const newCustomer = new Customer("1", "icaro.ssantos96@gmail.com", "Icaro", "dasuiodsa", "469459-98196ax")

const newSeller = new Seller('2', 'fernanda@gmail.com', "Fernanda", "12354", "14/06/2020", 1280)

console.log(newCustomer.introduceYourself())
console.log(newSeller.introduceYourself(), newSeller.calculateTotalSalary(), newSeller.getSalesQuantity())

newSeller.setSalesQuantity(5)

console.log(newSeller.getSalesQuantity(), newSeller.calculateTotalSalary())

// Exercício 01
// A. Não seria possível imprimir o password, pois ela não possui get
// B. Somente uma

// Exercício 02
// A. O construtor da classe Customer é chamado somente uma vez
// B. O construtor da classe User é chamado duas vezes, uma pela classe customer, e outra pela classe user

// Exercício 06
// A. Uma vez
// B. No momento é possível imprimir todos como objeto Employee.

// Exercício 08
// A. Passei os mesmos parâmetros que havia passado ao criar a instancia da classe Employee
// B. Consegui imprimir todas menos a senha, que não tem um get para ela.

// Exercício 09
// A. Sim, é possível imprimir o valor de salesQuantity, pois eu criei um getter

// Exercício 10
// A. Foi impresso o total do salário, que é salário base + benefícios + (quantidade * comissão por venda).
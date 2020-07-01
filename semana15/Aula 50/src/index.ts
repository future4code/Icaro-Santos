import {ResidentialClient} from './ResidentialClient'
import {ClientManager} from './ClientManager'
import {IndustrialClient} from './IndustrialClient'
import {CommerceClient} from './CommerceClient'

const clientIcaro = new ResidentialClient("Icaro", 1, 400, "451.355.598-09", 2, "09850-550")
const clientIcaro2 = new ResidentialClient("Icaro", 2, 400, "451.355.598-09", 2, "09850-550")
const industrialIcaro = new IndustrialClient('Icaro', 3, 300, "481282", 4, "09850-550")

const clientManager = new ClientManager()

console.log(clientManager.getClientsQuantity())

clientManager.registerClient(clientIcaro)
clientManager.registerClient(clientIcaro2)
clientManager.registerClient(industrialIcaro)

console.log(clientManager.getClientsQuantity())

console.log(clientManager.calculateBillOfClient(1))
console.log(clientManager.calculateBillOfClient(3))

console.log(clientManager.calculateTotalIncome())

clientManager.deleteClient(2)

console.log(clientManager.calculateTotalIncome())


// Exercício 01
// A. Consegui imprimir todos os valores sem problemas algum.

// Exercício 02
// A. O Typescript acusa que não é possível criar um objeto de uma classe abstrata
// B. Nós precisamos criar uma nova classe com o objeto que queremos, estendendo a abstração Place

// Exercício 04
// A. Essa classe (ResidentialCliente) possui todas as propriedades da classe Place, e da interface Client

// Exercício 05
// A. A semelhança é que ambas estendem como cliente, e herdam da classe pai place.
// B. A diferença é que o ResidentialClient mesmo herdando da classe place, tem suas diferenças do calculateBill e que recebe a quantidade de floors, não te pessoas.

// Exercício 06
// A. IndustrialClient é filha da classe Industry, para herdar todas os atributos e métodos dessa classe
// B. IndustrialClient implementa a interface Client, pois todos os clientes tem alguns atributos em comum, e isso não é diferente com as industrias
// C. Porque nós já setamos os atributos quando criamos uma instância da classe, e não precisamos alterar eles depois.
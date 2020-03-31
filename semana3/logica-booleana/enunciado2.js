let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)

a. O que é `array` e como se declara em `JS`?
array é uma variável que armazena vários tipos de dados diferentes em uma só variável.

b. Qual o index inicial de um `array`?
0

c. Como se determinar o tamanho do `array`?
let nomeArray[10];

d. Indique todas as mensagens impressas no console.
I. Undefined
II. null
III. 11
IV. 3 e 4
V. 19 e 9
VI. 3
VII. 1
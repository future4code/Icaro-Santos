import { User } from '../src/Exercício 01-02/User'
import { performPurchase } from '../src/Exercício 01-02/PerformPurchace'

describe("Exercício 02", () => {
    test("Faça um teste com um usuário com o saldo maior do que o valor de compra", () => {
        const user: User = {
            name: "Icaro",
            balance: 100
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            ...user,
            balance: 50
        })
    })

    test("Faça um teste com um usuário com o saldo igual ao valor de compra", () => {
        const user: User = {
            name: "Icaro",
            balance: 100
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("Faça um teste com um usuário com o saldo menor do que o valor de compra", () => {
        const user: User = {
            name: "Icaro",
            balance: 50
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual(undefined)
    })
})
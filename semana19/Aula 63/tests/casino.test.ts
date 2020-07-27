import {verifyAge} from '../src/Cassino/index'
import { User, Casino, Result, ResultItem, LOCATION, NACIONALITY } from '../src/Cassino/Interface'



describe("Exercício 04", () => {
    test("Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil", () => {
        const brazilian: User = {
            name: "Icaro",
            age: 23,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Balada estelar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brazilian])

        expect(result.brazilians.allowed).toEqual(["Icaro"])
    })

    test("Escreva um teste que receba um usuário americando que possa entrar em um estabelecimento no Brasil", () => {
        const american: User = {
            name: "Icaro",
            age: 23,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Balada estelar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [american])

        expect(result.americans.allowed).toEqual(["Icaro"])
    })

    test("Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.", () => {
        const users: User[] = [
            {
                name: "Icaro",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Maria",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "John",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Jurema",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const casino: Casino = {
            name: "Tuts tuts",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed).toEqual(["Icaro", "Maria"])
        expect(result.americans.unallowed).toEqual(["John", "Jurema"])
    })

    test("Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Eles querem estrar em um estabelecimento nos Estados Unidos.", () => {
        const users: User[] = [
            {
                name: "Icaro",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Maria",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "John",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Jurema",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const casino: Casino = {
            name: "Tuts tuts",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed).toEqual(["Icaro", "Maria"])
        expect(result.americans.allowed).toEqual(["John", "Jurema"])
    })
})

describe("Exercício 05", () => {
    test("teste complexo 01", () => {
        const brazilian: User = {
            name: "Icaro",
            age: 23,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Balada estelar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brazilian])

        expect(result.brazilians.allowed.length).toBeLessThan(2)
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    })
    test("teste complexo 02", () => {
        const american: User = {
            name: "Icaro",
            age: 23,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Balada estelar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [american])

        expect(result.americans.unallowed.length).toBe(0)
    })
    test("teste complexo 03", () => {
        const users: User[] = [
            {
                name: "Icaro",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Maria",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "John",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Jurema",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const casino: Casino = {
            name: "Tuts tuts",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed).toContain("Icaro")
        expect(result.americans.unallowed).toContain("Jurema")
    })

    test("teste complexo 04", () => {
        const users: User[] = [
            {
                name: "Icaro",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Maria",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "John",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Jurema",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const casino: Casino = {
            name: "Tuts tuts",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toEqual(2)
    })
})
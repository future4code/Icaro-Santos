import {validateCharacter} from '../src/Functions/validateCharacter'

test("Crie um teste que verifique o comportamento da função com um personagem com o nome vazio", () => {
    const character = {
        name: "",
        life: 1500,
        defense: 50,
        strength: 100
    }

    const result = validateCharacter(character)

    expect(result).toBe(false)
})

// Não consegui criar numbers vazios

test("Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo", () => {
    const character = {
        name: "Icaro",
        life: -1500,
        defense: 50,
        strength: 100
    }

    const result = validateCharacter(character)

    expect(result).toBe(false)
})

test("Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com o valor 0", () => {
    const character = {
        name: "Icaro",
        life: 0,
        defense: 0,
        strength: 0
    }

    const result = validateCharacter(character)

    expect(result).toBe(true)
})

test("Crie um teste que verifique o comportamento da função com um personagem com as informações validas", () => {
    const character = {
        name: "Icaro",
        life: 1500,
        defense: 50,
        strength: 100
    }

    const result = validateCharacter(character)

    expect(result).toBe(true)
})
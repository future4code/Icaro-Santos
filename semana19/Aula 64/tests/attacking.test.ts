import {performAttack} from '../src/Functions/performAttack'
import {validateCharacter} from '../src/Functions/validateCharacter'

test("Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida.", () => {
    const validatorMock = jest.fn(() => {
        return true
    })

    const attacker = {
        name: "Icaro",
        life: 1500,
        defense: 100,
        strength: 250
    }

    const defender = {
        name: "Icaro2",
        life: 1500,
        defense: 50,
        strength: 250
    }

    performAttack(attacker, defender, validatorMock as any)

    expect(defender.life).toEqual(1300)
    expect(validatorMock).toHaveBeenCalled()
    expect(validatorMock).toHaveBeenCalledTimes(2)
    expect(validatorMock).toHaveReturnedTimes(2)
})

test("Faça um teste com um dos personagens com alguma informação inválida.", () => {
    const validatorMock = jest.fn(() => {
        return false
    })

    const attacker = {
        name: "",
        life: 1500,
        defense: 100,
        strength: 250
    }

    const defender = {
        name: "Icaro2",
        life: 1500,
        defense: 50,
        strength: 250
    }

    try{
        performAttack(attacker, defender, validatorMock as any)
    }
    catch(err){
        expect(err.message).toEqual("Invalid character")
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(1)
        expect(validatorMock).toHaveReturnedTimes(1)
    }
})

test("testando defesas maiores que ataques", () => {
    const validatorMock = jest.fn(() => {
        return true
    })

    const attacker = {
        name: "Icaro",
        life: 1500,
        defense: 100,
        strength: 250
    }

    const defender = {
        name: "Icaro2",
        life: 1500,
        defense: 350,
        strength: 250
    }

    performAttack(attacker, defender, validatorMock as any)

    expect(defender.life).toEqual(1500)


})

test("testando vida após um ataque -0", () => {
    const validatorMock = jest.fn(() => {
        return true
    })

    const attacker = {
        name: "Icaro",
        life: 1500,
        defense: 100,
        strength: 2000
    }

    const defender = {
        name: "Icaro2",
        life: 1500,
        defense: 350,
        strength: 250
    }

    performAttack(attacker, defender, validatorMock as any)

    expect(defender.life).toEqual(-150)
})
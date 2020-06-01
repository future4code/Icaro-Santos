import { checaItensDuplicados } from "./ex3";
import { textSpanContainsPosition, isExportDeclaration } from "typescript";

describe("Checa itens duplicados", () => {
    test("retorna false para [1]", () => {
        const resultado = checaItensDuplicados([1])
        expect(resultado).toEqual(false)
    })
    test('retorna true', () => {
        const resultado = checaItensDuplicados([1.1, 1.1, 2, 2.1])
        expect(resultado).toEqual(true)
    })
    test('retorna true', () => {
        const resultado = checaItensDuplicados([-1.1, 1.1])
        expect(resultado).toEqual(false)
    })
    test('retorna true', () => {
        const resultado = checaItensDuplicados(['icaro', 'Icaro'])
        expect(resultado).toEqual(true)
    })
    test('retorna true', () => {
        const resultado = checaItensDuplicados(['icaro', 'icaro'])
        expect(resultado).toEqual(true)
    })
    test('retorna true', () => {
        const resultado = checaItensDuplicados([1, 1, 1])
        expect(resultado).toEqual(true)
    })

    test('retorna true', () => {
        const resultado = checaItensDuplicados([1, 1, 1, 2, 5, 7])
        expect(resultado).toEqual(true)
    })
});


// Caso tenham 3 itens duplicados, ele retorna false
// Função tem erro quando escrevemos o mesmo item com maiúsculo e minúsculo
import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });
  test("retorna true para asa", () => {
    const resultado = checaPalindromo("asa")
    expect(resultado).toEqual(true)
  })
  test("retorna false para icaro", () => {
    const resultado = checaPalindromo("icaro")
    expect(resultado).toEqual(false)
  })
  test('retorna true para socorram me subi no onibus em marrocos', () => {
    const resultado = checaPalindromo('socorram me subi no onibus em marrocos')
    expect(resultado).toEqual(true)
  })
  test('retorna true para asa mirim arara', () => {
    const resultado = checaPalindromo('asa mirim arara')
    expect(resultado).toEqual(true)
  }) 
});

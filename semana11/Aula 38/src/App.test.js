import React from "react";
import { render, fireEvent, waitForElement, getByLabelText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";


const criarPost = () => {
    const utils = render(<App />)

    const addBotao = utils.getByText(/adicionar/i)

    const inputPost = utils.getByPlaceholderText(/novo post/i)

    fireEvent.change(inputPost, { target: { value: 'teste' } })

    fireEvent.click(addBotao)

    return utils
}

test("Adicionar post", () => {
    const {getByText} = criarPost()

    const novoPost = getByText(/teste/i)

    expect(novoPost).toHaveTextContent(/teste/i)
})

test("clicar em curtir e descurtir", () => {
    const {getByText} = criarPost()

    const botaoCurtir = getByText(/curtir/i)

    fireEvent.click(botaoCurtir)

    const botaoDescurtir = getByText(/descurtir/i)

    expect(botaoDescurtir).toHaveTextContent(/descurtir/i)
})

test("apagar post", () => {
    const { getByText, queryByText } = criarPost()

    const botaoApagar = getByText(/apagar/i)

    fireEvent.click(botaoApagar)

    const checarPost = queryByText(/teste/i)

    expect(checarPost).toEqual(null)
})

test("limpar input após adicionar um post", () => {
    const {getByPlaceholderText} = criarPost()

    const inputPost = getByPlaceholderText(/novo post/i).value

    expect(inputPost).toEqual('')
})

test("mensagem nenhum post deve ser exibida caso nao tenha nenhum post", () => {
    const {getByText} = render(<App/>)

    const checarVazio = getByText(/nenhum post/i)

    expect(checarVazio)
})

test("mostrar quantidade de posts caso exista ao menos um", () => {
    const {getByText} = criarPost()

    const qtdPosts = getByText(/1/i)

    expect(qtdPosts).toHaveTextContent(/quantidade de posts/i)
})

test("caso o usuário tente criar post vazio", () => {
    const {getByText, getByPlaceholderText} = render(<App/>)

    const inputPost = getByPlaceholderText(/novo post/i)

    const addBotao = getByText(/adicionar/i)

    fireEvent.click(addBotao)

    const checarErro = getByText(/insira um valor/i)
})
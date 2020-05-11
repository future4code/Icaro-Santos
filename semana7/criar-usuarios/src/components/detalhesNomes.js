import React from 'react'
import styled from 'styled-components'

const DivNomes = styled.div`
  display: flex;
  margin: 0 auto 10px auto;
  justify-content: space-between;
  @media screen and (min-width: 500px){
    width: 600px;
  }
  @media screen and (max-width: 499px){
    width: 80%;
  }
`

const DivInputs = styled.div`
    display: grid;
    margin: 0 auto;
    justify-content: center;
    @media screen and (max-width: 499px){
        width: 90%;
        grid-template-columns: 1fr;
    }
    @media screen and (min-width: 500px) and (max-width: 1279px){
        width: 90%;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media screen and (min-width: 1280px){
        width: 1200px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

const Labels = styled.label`
    display: grid;
    justify-content: start;
    margin-bottom: 5px;
    @media screen and (min-width: 500px){
        grid-column: 1 / 5;
    }
    
`

const Inputs = styled.input`
    margin-bottom: 20px;
    padding: 12px;
    @media screen and (min-width: 500px){
        grid-column: 1 / 5;
    }
`

const Botao = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    grid-column: 1;
`

const NomeLista = styled.span`
`

const BotaoDeletar = styled.button`
  background-color: #d9534f;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 25px;
`

class DetalhesNomes extends React.Component{
    state = {
        botaoEditar: true,
        inputs: false
    }

    onClickEditar = () => {
        this.setState({
            botaoEditar: !this.state.botaoEditar,
            inputs: !this.state.inputs
        })
    }

    onClickCancelar = () => {
        this.setState({
            botaoEditar: !this.state.botaoEditar,
            inputs: !this.state.inputs
        })
    }
    render(){
        const verificaBotaoEditar = this.state.botaoEditar
        const verificaInputs = this.state.inputs
        let mostrarBotao
        let mostrarInputs

        if (verificaBotaoEditar){
            mostrarBotao = <button onClick={this.onClickEditar}>Editar</button>
        }

        if (verificaInputs){
            mostrarInputs = <DivInputs>
            <Labels for="nome">Nome* </Labels>
            <Inputs type={"text"} placeholder={"Nome"} value={this.props.valueNome} onChange={this.props.onChangeNome}></Inputs>
            <Labels for="email">Email* </Labels>
            <Inputs type={"email"} placeholder={"Email"} value={this.props.valueEmail} onChange={this.props.onChangeEmail}></Inputs>
            <Botao onClick={this.props.salvar}>Salvar</Botao>
            <Botao onClick={this.onClickCancelar}>Cancelar</Botao>
        </DivInputs>
        }
        return (
            <div>
                {mostrarInputs}
                <h1>Detalhes</h1>
                <DivNomes>
                    <NomeLista>{this.props.name}</NomeLista>
                    <NomeLista>{this.props.email}</NomeLista>
                    <BotaoDeletar onClick={() => this.props.deletar()}>x</BotaoDeletar>
                    {mostrarBotao}
                    <button onClick={this.props.voltar}>Voltar</button>
                </DivNomes>
            </div>
        )
    }
}

export default DetalhesNomes
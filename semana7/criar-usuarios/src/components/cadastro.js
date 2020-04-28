import React from 'react';
import styled from 'styled-components'

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

class Cadastro extends React.Component{
    render(){
        return(
            <DivInputs>
                <Labels for="nome">Nome* </Labels>
                <Inputs placeholder={"Nome"} value={this.props.valueNome} onChange={this.props.onChangeNome}></Inputs>
                <Labels for="email">Email* </Labels>
                <Inputs placeholder={"Email"} value={this.props.valueEmail} onChange={this.props.onChangeEmail}></Inputs>
                <Botao onClick={this.props.enviarCadastro}>Enviar</Botao>
            </DivInputs>
        )
    }
}

export default Cadastro
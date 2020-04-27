import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from '../PerguntaAberta/PerguntaAberta'
import PerguntaOpcoes from '../PerguntaAberta/PerguntaOpcoes'

const DivForms = styled.div`
    width: 50vw;
    margin: auto;
`

const Botao = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`

export class Etapa1 extends React.Component {

    state = {
        opcoes: [
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
        ]
    }

    

    render(){

        return(
            <DivForms>
                <h1>Dados Gerais</h1>
                <PerguntaAberta perguntas="Qual seu nome?" value={this.props.inputNome} onChange={this.props.onChangeNome}></PerguntaAberta>
                <PerguntaAberta perguntas="Qual sua idade?" value={this.props.inputIdade} onChange={this.props.onChangeIdade}></PerguntaAberta>
                <PerguntaAberta perguntas="Qual seu email?" value={this.props.inputEmail} onChange={this.props.onChangeEmail}></PerguntaAberta>
                <PerguntaOpcoes value={this.props.selecaoEnsino} onChange={this.props.onChangeEnsino} 
                    qtdeopcoes={4}
                    opcao1={this.state.opcoes[0]}
                    opcao2={this.state.opcoes[1]}
                    opcao3={this.state.opcoes[2]}
                    opcao4={this.state.opcoes[3]}
                />
                <Botao onClick={this.props.onClickEtapa1}>Próxima Etapa</Botao>
            </DivForms>
        )
    }
    
}

export default Etapa1
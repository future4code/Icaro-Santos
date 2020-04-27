import React from 'react';
import styled from 'styled-components'
import PerguntaOpcoes from '../PerguntaAberta/PerguntaOpcoes'
import PerguntaAberta from '../PerguntaAberta/PerguntaAberta'

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

export class Etapa2 extends React.Component{

    render(){
        return(
            <DivForms>
                <h1>Informação do Ensino Superior</h1>
                <PerguntaAberta perguntas="Qual o curso?" value={this.props.inputCursoSuperior} onChange={this.props.onChangeCursoSuperior}/>
                <PerguntaAberta perguntas="Qual a unidade de ensino" value={this.props.inputUnidadeCursoSuperior} onChange={this.props.onChangeUnidadeCursoSuperior}/>
                <Botao onClick={this.props.onClickFinalizar}>Finalizar</Botao>
            </DivForms>
        )
    }
}

export default Etapa2
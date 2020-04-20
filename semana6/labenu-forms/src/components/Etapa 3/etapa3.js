import React from 'react'
import styled from 'styled-components'
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

export class Etapa3 extends React.Component{
    render(){
        return(
            <DivForms>
                <h1>Informações gerais de ensino</h1>
                <PerguntaAberta perguntas={"Por que você não terminou um curso de graduação?"} value={this.props.inputNaoTerminou} onChange={this.props.onChangeNaoTerminou}/>
                <PerguntaOpcoes value={this.props.selecaoCurso} onChange={this.props.onChangeCurso}
                    qtdeopcoes={3}
                    opcao1={"Curso técnico"}
                    opcao2={"Cursos de inglês"}
                    opcao3={"Não fiz curso complementar"}
                    />
                    
                <Botao onClick={this.props.onClickFinalizar}>Finalizar</Botao>
            </DivForms>
        )
        
    }
}

export default Etapa3
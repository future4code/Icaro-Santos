import React from 'react'
import styled from 'styled-components'

const Selecao = styled.select`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
`

export class PerguntaOpcoes extends React.Component{
    render(){

        const qtdeopcoes = this.props.qtdeopcoes

        if (qtdeopcoes === 4){
            return (
                <Selecao value={this.props.value} onChange={this.props.onChange}>
                    <option value={this.props.opcao1}>{this.props.opcao1}</option>
                    <option value={this.props.opcao2}>{this.props.opcao2}</option>
                    <option value={this.props.opcao3}>{this.props.opcao3}</option>
                    <option value={this.props.opcao4}>{this.props.opcao4}</option>
                </Selecao>
            )
        }else{
            return (
                <Selecao value={this.props.value} onChange={this.props.onChange}>
                    <option value={this.props.opcao1}>{this.props.opcao1}</option>
                    <option value={this.props.opcao2}>{this.props.opcao2}</option>
                    <option value={this.props.opcao3}>{this.props.opcao3}</option>
                </Selecao>
            )
        }
    }
}

export default PerguntaOpcoes
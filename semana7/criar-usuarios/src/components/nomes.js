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

class Nomes extends React.Component {
    render() {
        const nomesCadastrados = this.props.cadastros.map((cadastro) => {
            return (
              <DivNomes>
                <NomeLista onClick={() => this.props.mostrarDetalhes(cadastro.id)}>{cadastro.name}</NomeLista>
                <BotaoDeletar onClick={() => this.props.deletar(cadastro.id)}>x</BotaoDeletar>
              </DivNomes>
            )
          })
        return (
            <div>
                <input placeholder={"Busca"} value={this.props.valueBusca} onChange={this.props.onChangeBusca}></input>
                <button type={"search"} onClick={this.props.botaoBusca}>Buscar</button>
                <button onClick={this.props.botaoLimparBusca}>Limpar busca</button>
                {nomesCadastrados}
            </div>
        )
    }
}

export default Nomes
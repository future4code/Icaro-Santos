import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Axios from 'axios'
import SpaceX from './components/SpaceX'
import StarWars from './components/StarWars'

class App extends React.Component {
  state = {
    escolherTelaInicial: true,
    escolherTela: undefined
  }

  escolherSpaceX = () => {
    this.setState({
      escolherTela: true,
      escolherTelaInicial: false
    })
    
  }

  escolherOutro = () => {
    this.setState({
      escolherTela: false,
      escolherTelaInicial: false
    })
  }

  paginaInicial = () => {
    this.setState({
      escolherTelaInicial: true,
      escolherTela: undefined
    })
  }

  render() {
    let mostrarSpaceX
    let mostrarOutraTela
    let telaInicial
    const verificaTelaInicial = this.state.escolherTelaInicial
    const verificarTelaEscolhida = this.state.escolherTela

    if(verificaTelaInicial){
      telaInicial = <div className="App">
        <button onClick={this.escolherSpaceX}>SpaceX</button>
        <button onClick={this.escolherOutro}>Star Wars</button>
      </div>
    }

    if(verificarTelaEscolhida){
      mostrarSpaceX = <SpaceX paginaInicial={this.paginaInicial}/>
    }

    if (verificarTelaEscolhida === false){
      mostrarOutraTela = <StarWars paginaInicial={this.paginaInicial}/>
    }

    return(
      <div className="App">
        {telaInicial}
        {mostrarSpaceX}
        {mostrarOutraTela}
      </div>
      
    )
  }
}

export default App;

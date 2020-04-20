import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa 1/etapa1'
import Etapa2 from './components/Etapa 2/etapa2'
import Etapa3 from './components/Etapa 3/etapa3'

class App extends React.Component {
  state = {
    inputNome: '',
    inputIdade: '',
    inputEmail: '',
    selecaoEnsino: '',
    inputCursoSuperior: '',
    inputUnidadeCursoSuperior: '',
    inputNaoTerminou: '',
    selecaoCurso: '',
    etapa1: true,
    etapa2: false,
    etapa3: false,
    etapaFinal: false,
  }

  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  onChangeIdade = (event) => {
    this.setState({inputIdade: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  onChangeEnsino = (event) => {
    this.setState({selecaoEnsino: event.target.value})
  }

  onChangeCursoSuperior = (event) => {
    this.setState({inputCursoSuperior: event.target.value})
  }

  onChangeUnidadeCursoSuperior = (event) => {
    this.setState({inputUnidadeCursoSuperior: event.target.value})
  }

  onChangeNaoTerminou = (event) => {
    this.setState({inputNaoTerminou: event.target.value})
  }
  
  onChangeCurso = (event) => {
    this.setState({selecaoCurso: event.target.value})
  }

  onClickEtapa1 = () => {
    if (this.state.selecaoEnsino === "Ensino superior incompleto" || this.state.selecaoEnsino === "Ensino superior completo"){
      this.setState({
        etapa1: false,
        etapa2: true,
        etapa3: false,
      })
    }else{
      this.setState({
        etapa1: false,
        etapa2: false,
        etapa3: true,
      })
    }
  }

  onClickFinalizar = () => {
    this.setState({
      etapa1: false,
      etapa2: false,
      etapa3: false,
      etapaFinal: true
    })
  }

  render(){
    if(this.state.etapa1){
      return (
        <div className="App">
          <Etapa1 
            inputNome={this.state.inputNome}
            onChangeNome={this.onChangeNome}
            inputIdade={this.state.inputIdade}
            onChangeIdade={this.onChangeIdade}
            inputEmail={this.state.inputEmail}
            onChangeEmail={this.onChangeEmail}
            onChangeEnsino={this.onChangeEnsino}
            onClickEtapa1={this.onClickEtapa1}
          />
        </div>
      );
    }
    if(this.state.etapa2){
      return(
        <div className="App">
          <Etapa2
            inputCursoSuperior={this.state.inputCursoSuperior}
            onChangeCursoSuperior={this.onChangeCursoSuperior}
            inputUnidadeCursoSuperior={this.state.inputUnidadeCursoSuperior}
            onChangeUnidadeCursoSuperior={this.onChangeUnidadeCursoSuperior}
            onClickFinalizar={this.onClickFinalizar}
          />
        </div>
      )
    }
    if(this.state.etapa3){
      return(
        <div className="App">
          <Etapa3
            inputNaoTerminou={this.state.inputNaoTerminou}
            onChangeNaoTerminou={this.onChangeNaoTerminou}
            selecaoCurso={this.state.selecaoCurso}
            onChangeCurso={this.onChangeCurso}
            onClickFinalizar={this.onClickFinalizar}
          />
        </div>
      )
    }
    if(this.state.etapaFinal){
      return(
        <div className="App">
          <h1>O formulário acabou</h1>
          <p>Muito obrigado por participar, entraremos em contato</p>
        </div>
      )
    }
  }  
}

export default App;

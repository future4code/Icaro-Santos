import React from 'react';
import './App.css';
import Cadastro from './components/cadastro'
import Axios from 'axios';
import styled from 'styled-components';

const MainContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
`

class App extends React.Component {
  state = {
    inputNome: '',
    inputEmail: '',
    mostrarNomesCadastrados: false,
    cadastros: []
  }

  componentDidMount() {
    this.mostrarNomes();
  }

  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  mostrarNomes = () => {
    Axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "icaro-santos-julian"
      }
    })
    .then(response => {
      this.setState({cadastros: response.data})
    })
    .catch(error => {
      window.alert(error)
    })
  }

  cadastrar = () => {
    const cadastro = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }

    Axios
    .post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', cadastro, {
      headers: {
        Authorization: "icaro-santos-julian"
      }
    })
    .then((response) => {
      window.alert("Dados Enviados com sucesso")
      this.mostrarNomes()
      this.setState({
        inputNome: '',
        inputEmail: ''
      })
    })
    .catch((erro) => {
      window.alert("Erro")
    })
  }

  deletar = (id) => {
    Axios
    .delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' + id, {
      headers: {
        Authorization: 'icaro-santos-julian'
      }
    })
    .then((response) => {
      window.alert("Excluido com sucesso")
      this.mostrarNomes()
    })
    .catch((error) => {
      window.alert("Erro na exclusão")
    })
  }

  mudarTela = () => {
    this.setState({
      mostrarNomesCadastrados: !this.state.mostrarNomesCadastrados
    })
  }

  render() {

    const verificaTela = this.state.mostrarNomesCadastrados

    const testarFuncionamento = this.state.cadastros.map((cadastro) => {
      return <div>
          <p>{cadastro.name}</p>
          <button onClick={() => this.deletar(cadastro.id)}>Deletar</button>
        </div>
    })

    if(!verificaTela){
      return(
        <div className="App">
          <MainContainer>
            <h1>Cadastro</h1>
            <Cadastro
              valueNome={this.state.inputNome}
              onChangeNome={this.onChangeNome}
              valueEmail={this.state.inputEmail}
              onChangeEmail={this.onChangeEmail}
              enviarCadastro={this.cadastrar}
            />
            <button onClick={this.mudarTela}>Lista com os nomes</button>
          </MainContainer>
        </div>
      )
    }    
    return(
      <div className="App">
        <MainContainer>
        {testarFuncionamento}
        <button onClick={this.mudarTela}>Cadastro</button>
        </MainContainer>
      </div>
    )
    
  };
}

export default App;

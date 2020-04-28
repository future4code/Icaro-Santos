import React from 'react';
import './App.css';
import Cadastro from './components/cadastro'
import Axios from 'axios';
import styled from 'styled-components';

const DivNomes = styled.div`
  display: flex;
  margin: 0 auto 10px auto;
  justify-content: space-between;
  @media screen and (min-width: 500px){
    width: 400px;
  }
  @media screen and (max-width: 499px){
    width: 80%;
  }
`

const Nomes = styled.span`
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

const BotaoMudarTela = styled.button`
  margin-top: 50px;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
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
      return (
        <DivNomes>
          <Nomes>{cadastro.name}</Nomes>
          <BotaoDeletar onClick={() => this.deletar(cadastro.id)}>x</BotaoDeletar>
        </DivNomes>
      )
    })

    if(!verificaTela){
      return(
        <div className="App">
          <h1>Cadastrar pessoa no sistema</h1>
          <Cadastro
            valueNome={this.state.inputNome}
            onChangeNome={this.onChangeNome}
            valueEmail={this.state.inputEmail}
            onChangeEmail={this.onChangeEmail}
            enviarCadastro={this.cadastrar}
          />
          <BotaoMudarTela onClick={this.mudarTela}>Lista com os nomes</BotaoMudarTela>
        </div>
      )
    }    
    return(
      <div className="App">
        <h1>Usuários Cadastrados</h1>
        {testarFuncionamento}
        <BotaoMudarTela onClick={this.mudarTela}>Cadastro</BotaoMudarTela>
      </div>
    )
    
  };
}

export default App;

import React from 'react';
import './App.css';
import Cadastro from './components/cadastro'
import Nomes from './components/nomes'
import DetalhesNomes from './components/detalhesNomes'
import Axios from 'axios';
import styled from 'styled-components';


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
    inputBusca: '',
    mostrarNomesCadastrados: false,
    mostrarDetalhes: false,
    cadastros: [],
    detalhesPessoas: []
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

  onChangeBusca = (event) => {
    this.setState({inputBusca: event.target.value})
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

  mostrarDetalhes = (id) => {
    Axios
    .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' + id, {
      headers: {
        Authorization: 'icaro-santos-julian'
      }
    })
    .then((response) => {
      this.setState({
        detalhes: response.data,
        mostrarDetalhes: !this.state.mostrarDetalhes
      })
    })
    .catch((error) => {
      window.alert("Erro ao mostrar detalhes");
    })
  }

  salvar = (id) => {

    const verifica = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }

    let mudanca

    if (verifica.email === ''){
      mudanca = {
        name: this.state.inputNome
      }
    }else if(verifica.name === ''){
      mudanca = {
        email: this.state.inputEmail
      }
    }else{
      mudanca = {
        name: this.state.inputNome,
        email: this.state.inputEmail
      }
    }
    Axios
    .put('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' + id, mudanca, {
      headers: {
        Authorization: 'icaro-santos-julian'
      }
    })
    .then((response) => {
      this.mostrarNomes()
      this.setState({
        inputNome: '',
        inputEmail: '',
        mostrarDetalhes: !this.state.mostrarDetalhes
      })
    })
    .catch((error) => {
      window.alert("Não funcionou")
    })
  }

  deletar = (id) => {
    if(window.confirm("Tem certeza que deseja deletar este usuário?")){
      Axios
      .delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' + id, {
        headers: {
          Authorization: 'icaro-santos-julian'
        }
      })
      .then((response) => {
        window.alert("Excluido com sucesso")
        this.mostrarNomes()
        this.setState({
          mostrarDetalhes: !this.state.mostrarDetalhes
        })
      })
      .catch((error) => {
        window.alert("Erro na exclusão")
      })
    }
  }

  buscar = () => {
    Axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.inputBusca}`, {
      headers: {
        Authorization: 'icaro-santos-julian'
      }
    })
    .then((response) => {
      this.setState({
        cadastros: response.data
      })
    })
    .catch((error) => {
      window.alert("Erro na busca")
    })
  }

  limparBusca = () => {
    this.mostrarNomes()
    this.setState({
      inputBusca: ''
    })
  }

  voltar = () => {
    this.setState({
      mostrarDetalhes: !this.state.mostrarDetalhes
    })
  }

  mudarTela = () => {
    this.setState({
      mostrarNomesCadastrados: !this.state.mostrarNomesCadastrados
    })
  }

  render() {

    const verificaTela = this.state.mostrarNomesCadastrados

    const mostrarDetalhes = this.state.mostrarDetalhes    

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
    if(mostrarDetalhes){
      return <div className="App">
        <DetalhesNomes
          name={this.state.detalhes.name}
          email={this.state.detalhes.email}
          deletar={() => this.deletar(this.state.detalhes.id)}
          voltar={this.voltar}
          valueNome={this.state.inputNome}
          onChangeNome={this.onChangeNome}
          valueEmail={this.state.inputEmail}
          onChangeEmail={this.onChangeEmail}
          salvar={() => this.salvar(this.state.detalhes.id)}
        />
      </div>
    }
    return(
      <div className="App">
        <h1>Usuários Cadastrados</h1>
        <Nomes
          valueBusca={this.state.inputBusca}
          onChangeBusca={this.onChangeBusca}
          botaoBusca={this.buscar}
          botaoLimparBusca={this.limparBusca}
          cadastros={this.state.cadastros}
          mostrarDetalhes={this.mostrarDetalhes}
          deletar={this.deletar}
        />
        <BotaoMudarTela onClick={this.mudarTela}>Cadastro</BotaoMudarTela>
      </div>
    )
    
  };
}

export default App;

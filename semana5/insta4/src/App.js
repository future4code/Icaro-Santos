import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const AdicionarPost = styled.div`
  display: block;
  justify-content: center;
  padding: 5px;
`

const InputPost = styled.input`
  padding: 10px;
`

const BotaoAdicionar = styled.button`
  padding: 10px;
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'icaro',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      }
    ],
    inputUsuario: "",
    inputFotoPost: "",
    inputFotoUsuario: "",
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFotoPost,
      fotoPost: this.state.inputFotoUsuario
    }

    const novosPosts = [...this.state.post, novoPost]

    this.setState({
      post: novosPosts,
      inputUsuario: "",
      inputFotoPost: "",
      inputFotoUsuario: ""
    })
  }

  onChangeUsuario = (event) => {
		this.setState({inputUsuario: event.target.value})
  }

  onChangeFotoPost = (event) => {
    this.setState({inputFotoPost: event.target.value})
  }

  onChangeFotoUsuario = (event) => {
    this.setState({inputFotoUsuario: event.target.value})
  }
  
  render() {

    const listaDePost = this.state.post.map((posts) => {
      return (
        <Post 
          nomeUsuario={posts.nomeUsuario}
          fotoUsuario={posts.fotoUsuario}
          fotoPost={posts.fotoPost}
          key={posts}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <AdicionarPost>
          <InputPost placeholder={'Nome de Usuário'} value={this.state.inputUsuario} onChange={this.onChangeUsuario}></InputPost>
          <InputPost placeholder={'Foto do perfil'} value={this.state.inputFotoUsuario} onChange={this.onChangeFotoUsuario}></InputPost>
          <InputPost placeholder={'Foto do post'} value={this.state.inputFotoPost} onChange={this.onChangeFotoPost}></InputPost>
          <BotaoAdicionar onClick={this.adicionarPost}>Adicionar Post</BotaoAdicionar>
        </AdicionarPost>
        {listaDePost}
      </div>
    );
  }
}

export default App;
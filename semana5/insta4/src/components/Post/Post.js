import React from 'react'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeMarcacaoBranco from '../../img/bookmark_white.svg'
import iconeMarcacaoPreto from '../../img/bookmark.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeCompartilhar from '../../img/share.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'
import styled from 'styled-components'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`
const FotoUsuario = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const FotoPost = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcacao: false,
    compartilhar: false,
    valorCompartilhar: '',
    valorComentario: '',
    comentarios: []
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })
    if (!this.state.curtido){
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})
    }else{
      this.setState({numeroCurtidas: this.state.numeroCurtidas -1})
    }
  }

  onClickMarcacao = () => {
    this.setState({
      marcacao: !this.state.marcacao
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando:!this.state.comentando
    })
  }

  onChangeMensagem = (event) => {
    this.setState({valorCompartilhar: event.target.value})
}

  onChangeComentario = (event) => {
    this.setState({valorComentario: event.target.value})
  }

  onClickFacebook = () => {
    console.log("Post compartilhado no Facebook com a mensagem: " + this.state.valorCompartilhar);
    this.setState({
      compartilhar: false,
      valorMensagem: ''
    })
  }

  onClickInstagram = () => {
    console.log("Post compartilhado no Instagram com a mensagem: " + this.state.valorCompartilhar);
    this.setState({
      compartilhar: false,
      valorMensagem: ''
    })
  }

  onClickTwitter = () => {
    console.log("Post compartilhado no Twitter com a mensagem: " + this.state.valorCompartilhar);
    this.setState({
      compartilhar: false,
      valorMensagem: ''
    })
  }

  aoEnviarComentario = () => {
    const novoComentario = this.state.valorComentario

    const novosComentarios = [...this.state.comentarios, novoComentario]
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      comentarios: novosComentarios
    })
  }
  render() {
    let iconeCurtida
    let iconeMarcacao

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.marcacao) {
      iconeMarcacao = iconeMarcacaoPreto
    } else {
      iconeMarcacao = iconeMarcacaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario 
      comentario={this.valorComentario} 
      aoEnviar={this.aoEnviarComentario}
      onChangeComentario={this.onChangeComentario}>
      </SecaoComentario>
    }

    const listaDeComentarios = this.state.comentarios.map((escrita) => {
      return(
        <p>{escrita}</p>
      )
    })

    let componenteCompartilhar

    if(this.state.compartilhar){
      componenteCompartilhar = <SecaoCompartilhar 
        facebook={this.onClickFacebook}
        instagram={this.onClickInstagram}
        twitter={this.onClickTwitter}
        mudarMensagem={this.onChangeMensagem}
        mensagem={this.state.mensagem}/>
    }

    return <PostContainer>
      <PostHeader>
        <FotoUsuario src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <FotoPost src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeSemContador
          icone={iconeMarcacao}
          onClickIcone={this.onClickMarcacao}
        />

        <IconeSemContador 
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {listaDeComentarios}
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post
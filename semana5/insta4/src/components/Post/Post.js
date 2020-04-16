import React from 'react'
import './Post.css'

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

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcacao: false,
    compartilhar: false,
    valorCompartilhar: ''
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
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
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
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhar){
      componenteCompartilhar = <SecaoCompartilhar 
        facebook={this.onClickFacebook}
        instagram={this.onClickInstagram}
        twitter={this.onClickTwitter}
        mudarMensagem={this.onChangeMensagem}
        mensagem={this.state.mensagem}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
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
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post
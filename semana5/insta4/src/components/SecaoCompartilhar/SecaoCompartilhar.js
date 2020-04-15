import React, {Component} from 'react'
import './SecaoCompartilhar.css'
import instagramLogo from '../../img/instagram.png'
import facebookLogo from '../../img/facebook.png'
import twitterLogo from '../../img/twitter.svg'

export class SecaoCompartilhar extends Component {

	render() {
		return <div className={'compartilhar-container'}>
            <input className="input-mensagem" value={this.props.mensagem} onChange={this.props.mudarMensagem} />

			<img alt={"facebook"} src={facebookLogo} onClick={this.props.facebook}/>
            <img alt={"instagram"} src={instagramLogo} onClick={this.props.instagram}/>
            <img alt={"twitter"} src={twitterLogo} onClick={this.props.twitter}/>
		</div>
	}
}
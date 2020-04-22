import React, {Component} from 'react';
import '../IconeComContador/IconeComContador.css';

export class IconeSemContador extends Component {
    render() {
        return<div className={'icon-container'}>
            <img alt={'icone'} src={this.props.icone} onClick={this.props.onClickIcone}/>
        </div>
    }
}
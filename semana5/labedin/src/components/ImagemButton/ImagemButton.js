import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem } alt={props.altImagem}/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemButton;
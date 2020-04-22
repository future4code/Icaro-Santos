import React from 'react';
import './CardPequeno.css';

function CardPequeno(props){
    return (
        <div className="smallcard-container">
            <img src={props.imagem} alt={props.altImagem}/>
            <span><b>{props.descricao}</b> {props.informacao}</span>
        </div>
    );
}

export default CardPequeno
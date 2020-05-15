import React, { useState } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import PrincipalComponent from '../../Components/Principal'
import MatchComponent from '../../Components/Matches'


function PrincipalScreen() {
    const [botaoHeader, setBotaoHeader] = useState(false)

    const onClickBotaoMatch = () => {
        setBotaoHeader(!botaoHeader)
    }

    const limparLista = () => {
        axios
        .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/icaro-santos/clear')
        .then(response => {

        })
        .catch(error => {
            window.alert(error)
        })
        if(botaoHeader){
            setBotaoHeader(!botaoHeader)
        }
    }

    const telaPrincipal = !botaoHeader ? (
        <PrincipalComponent botaoHeader={onClickBotaoMatch}></PrincipalComponent>
    ) : (
        <MatchComponent botaoHeader={onClickBotaoMatch} limparLista={limparLista}/>
    )

    return (
        <Container xs={12}>
            <Row>
                {telaPrincipal}
            </Row>
            <Row>
                <button onClick={limparLista}>Limpar Lista</button>
            </Row>
        </Container>
    )

}

export default PrincipalScreen
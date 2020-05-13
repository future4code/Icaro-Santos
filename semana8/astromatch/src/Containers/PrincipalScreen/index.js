import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import PrincipalComponent from '../../Components/Principal'
import MatchComponent from '../../Components/Matches'


function PrincipalScreen() {
    const [botaoHeader, setBotaoHeader] = useState(false)

    const onClickBotaoMatch = () => {
        setBotaoHeader(!botaoHeader)
    }

    const telaPrincipal = !botaoHeader ? (
        <PrincipalComponent botaoHeader={onClickBotaoMatch}></PrincipalComponent>
    ) : (
        <MatchComponent botaoHeader={onClickBotaoMatch}/>
    )

    return (
        <Container>
            <Row>
                {telaPrincipal}
            </Row>
        </Container>
    )

}

export default PrincipalScreen
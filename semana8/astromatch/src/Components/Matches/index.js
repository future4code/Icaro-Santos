import React, { useState, useEffect } from 'react'
import { Col, Card, Image, ListGroup, Media } from 'react-bootstrap'
import { HeaderContainer, BotaoHeaderDireita, ListaWrapper } from './style'
import PeopleIcon from '@material-ui/icons/People';
import axios from 'axios'

function MatchComponent(props) {

    const [listaMatches, setListaMatches] = useState([])

    useEffect(() => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/icaro-santos/matches')
            .then(response => {
                setListaMatches(response.data.matches)
            })
            .catch(error => {
                window.alert(error)
            })
    }, [])

    const imprimeListas = listaMatches.map(match => {
        return <Media className={"mt-2"}>
            <img src={match.photo} width={64} height={64} ></img>
            <Media.Body>
                <p>{match.name}, {match.age}</p>
            </Media.Body>
            
        </Media>
    })

    return (
        <Col xs={12} className="mt-1">
            <Card className="pb-2">
                <HeaderContainer>
                    Astromatch
                    <BotaoHeaderDireita onClick={props.botaoHeader}><PeopleIcon /></BotaoHeaderDireita>
                </HeaderContainer>
                <Card.Body>
                        {imprimeListas}
                </Card.Body>
            </Card>
        </Col>
    )

}

export default MatchComponent
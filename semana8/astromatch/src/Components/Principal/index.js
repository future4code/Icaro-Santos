import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {  Col, Card } from 'react-bootstrap'
import { BotaoCurtir, BotaoDescurtir, DivBotao, HeaderContainer, BotaoHeaderDireita } from './style'
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleIcon from '@material-ui/icons/People';


function PrincipalComponent(props) {
    const [listaProfiles, setListaProfiles] = useState({})

    useEffect(() => {
        pegaPerfil()
    }, [])

    const pegaPerfil = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/icaro-santos/person')
        .then(response => {
            setListaProfiles(response.data.profile)
        })
        .catch(error => {
            window.alert(error)
        })
    }

    const onClickDislike = (idEscolhido) => {
        axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/icaro-santos/choose-person', {id: idEscolhido, choice: false})
        .then(response => {
        })
        .catch(error => {
            window.alert(error)
        })
        pegaPerfil()
    }

    const onClickLike = (idEscolhido) => {
        axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/icaro-santos/choose-person', {id: idEscolhido, choice: true})
        .then(response => {

        })
        .catch(error => {
            window.alert(error)
        })
        pegaPerfil()
    }

    return (
        <Card className="pb-2">
            <HeaderContainer>
                Astromatch
                <BotaoHeaderDireita onClick={props.botaoHeader}><PeopleIcon /></BotaoHeaderDireita>
            </HeaderContainer>
            <Card.Body>
                <img variant="top" src={listaProfiles.photo} width={"100%"} height={400}/>
                <Card.Title>
                    {listaProfiles.name}, {listaProfiles.age}
                </Card.Title>
                <Card.Text>
                    {listaProfiles.bio}
                </Card.Text>
            </Card.Body>
            <DivBotao>
                <BotaoDescurtir variant="danger" onClick={() => onClickDislike(listaProfiles.id)}><CloseIcon /></BotaoDescurtir>
                <BotaoCurtir variant="success" onClick={() => onClickLike(listaProfiles.id)}><FavoriteIcon /></BotaoCurtir>
            </DivBotao>
        </Card>
    )

}

export default PrincipalComponent
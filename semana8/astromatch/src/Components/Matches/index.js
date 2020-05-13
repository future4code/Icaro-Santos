import React, { useState } from 'react'
import ImgTeste from '../../img/teste.png'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { BotaoCurtir, BotaoDescurtir, DivBotao, HeaderContainer, BotaoHeaderDireita } from './style'
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleIcon from '@material-ui/icons/People';

function MatchComponent(props) {

    return (
        <Container>
            <Row>
                <Col xs={12} className="mt-1">
                    <Card className="pb-2">
                        <HeaderContainer>
                            Astromatch
                            <BotaoHeaderDireita onClick={props.botaoHeader}><PeopleIcon /></BotaoHeaderDireita>
                        </HeaderContainer>
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}

export default MatchComponent
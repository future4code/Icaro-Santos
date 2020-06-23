import React from 'react'
import { useState } from 'react'
import {DrawerMenu} from './style'
import {useHistory} from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {

    const [anchor, setAnchor] = useState(false)
    const history = useHistory()

    const toggleDrawer = () => {
        setAnchor(!anchor);
    }
    
    const goToHomePage = () => {
        history.push('/')
    }

    const goToTripsCreate = () => {
        history.push('/trips/create')
    }

    const goToTripsList = () => {
        history.push('/trips/list')
    }

    const goToTripsDetails = () => {
        history.push('/trips/details')
    }

    const goToLoginPage = () => {
        history.push('/login')
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit">
                        <MenuIcon onClick={toggleDrawer}
                            edge="start" />
                        <DrawerMenu open={anchor} onClose={toggleDrawer}>
                            <ListItem button onClick={goToHomePage}>
                                <ListItemText>Inicio</ListItemText>
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={goToTripsList}>
                                <ListItemText>Listar viagens</ListItemText>
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={goToTripsCreate}>
                                <ListItemText>Criar viagens</ListItemText>
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={goToTripsDetails}>
                                <ListItemText>Detalhes das viagens</ListItemText>
                            </ListItem>
                        </DrawerMenu>
                    </IconButton>
                    <Button color="inherit" onClick={goToLoginPage}>Login</Button>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Header
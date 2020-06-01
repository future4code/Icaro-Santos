import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const HomePage = () => {

    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/icaro-santos-julian/trips')

        .then(response => {
            setTrips(response.data.trips)
        })

        .catch(e => {
            window.alert(e)
        })
    }, [])

    return (
        <div>
            <Header />


            <Container>
                <Grid container spacing={4}>
                    {trips.map(trip => {
                        return <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4">{trip.name}</Typography>

                                <Typography>Descrição: {trip.description}</Typography>

                                <Typography>Planeta: {trip.planet}</Typography>

                                <Typography>Data: {trip.date}</Typography>

                                <Typography>Duração: {trip.durationInDays} dias</Typography>

                            </CardContent>

                            <CardActions>
                                <Button>Se inscreva!</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    })}
                </Grid>
            </Container>
            
        </div>
    )
}

export default HomePage
import React from 'react'
import {useHistory} from 'react-router-dom'

const TripDetailsPage = () => {
    const history = useHistory()

    const goToHomePage = () => {
        history.push('/')
    }

    return(
        <div>
            <h1>Trip Details Page</h1>
            <button onClick={goToHomePage}>Voltar para home</button>
        </div>
    )
}

export default TripDetailsPage
import React from 'react'
import {useHistory} from 'react-router-dom'

const ListTripsPage = () => {
    const history = useHistory()

    const goToHomePage = () => {
        history.push('/')
    }

    return(
        <div>
            <h1>List Trips Page</h1>
            <button onClick={goToHomePage}>Voltar para home</button>
        </div>
    )
}

export default ListTripsPage
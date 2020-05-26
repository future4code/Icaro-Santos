import React from 'react'
import {useHistory} from 'react-router-dom'

const ListTripsPage = () => {
    const history = useHistory()


    const handleLogout = () => {
        localStorage.clear()
        history.replace('/')
    }

    return(
        <div>
            <h1>List Trips Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default ListTripsPage
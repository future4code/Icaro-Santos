import React from 'react'
import {useHistory} from 'react-router-dom'
import {ProtectedPage} from '../../Hooks/ProtectedPage'

const ListTripsPage = () => {
    const history = useHistory()

    ProtectedPage();

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
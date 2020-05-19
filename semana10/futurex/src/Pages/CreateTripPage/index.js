import React from 'react'
import { useHistory } from 'react-router-dom';

const CreateTripPage = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.push('/')
    }

    return (
        <div>
            <h1>Create Trip Page</h1>
            <button onClick={goToHomePage}>Voltar para home</button>
        </div>
    )
}

export default CreateTripPage
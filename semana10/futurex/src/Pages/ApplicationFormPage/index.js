import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header'

const ApplicationFormPage = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.replace('/');
    }

    return (
        <div>
            <Header></Header>
            <h1>Application Form Page</h1>
            <button onClick={goToHomePage}>Voltar para home</button>
        </div>
    )
}

export default ApplicationFormPage
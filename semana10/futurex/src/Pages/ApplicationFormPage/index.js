import React from 'react';
import { useHistory } from 'react-router-dom';

const ApplicationFormPage = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.replace('/');
    }

    return (
        <div>
            <h1>Application Form Page</h1>
            <button onClick={goToHomePage}>Voltar para home</button>
        </div>
    )
}

export default ApplicationFormPage
import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.replace('/')
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={goToHomePage}>Voltar para home</button>
        </div>
    )
}

export default LoginPage
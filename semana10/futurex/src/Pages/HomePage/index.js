import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header'

const HomePage = () => {
    const history = useHistory();

    const goToApplicationForm = () => {
        history.push('/application-form')
    }
    const goToLogginPage = () => {
        history.push('/login')
    }

    return(
        <div>
            <Header/>
            <button onClick={goToApplicationForm}>Application form</button>
            <button onClick={goToLogginPage}>Login</button>
        </div>
    )
}

export default HomePage
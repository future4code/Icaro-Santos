import React from 'react';
import { useHistory } from 'react-router-dom';

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
            <button onClick={goToApplicationForm}>Application form</button>
            <button onClick={goToLogginPage}>Login</button>
        </div>
    )
}

export default HomePage
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react';

export const ProtectedPage = () => {
    const history = useHistory();
    const token = window.localStorage.getItem('token')

    useEffect(() => {
        if(token === null){
            history.replace('/login')
        }
    })
}
import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import Header from '../../Components/Header'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

const LoginPage = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const token = window.localStorage.getItem('token');

        if (token !== null){
            history.push('/trips/list')
        }
    }, [])

    const pressEnter = (event) => {
        if(event.key === 'Enter'){
            handleLogin()
        }
    }

    const handleLogin = async() => {
        const body = {
            email: email,
            password: password,
        }
        try{
            const response = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/icaro-santos-julian/login', body)
            window.localStorage.setItem('token', response.data.token)
            history.replace('/trips/list')
        }catch (error) {
            window.alert("Login ou senha incorretos")
            setEmail('')
            setPassword('')
        }
    }
    
    return (
        <div>
            <Header></Header>
            <Container>
                <Typography variant="h2">Login Page</Typography>
                <TextField 
                    label="Login"
                    variant="outlined"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    />
                <TextField 
                    variant="outlined" 
                    label="Senha" 
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    onKeyPress={pressEnter}
                    />
                <Button onClick={handleLogin}>Entrar</Button>
            </Container>
        </div>
    )
}

export default LoginPage
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const NewTask = (props) => {
    const classes = useStyles()
    const [inputTask, setInputTask] = useState('')
    const [selectDay, setSelectDay] = useState('')

    const postTask = () => {
        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-icaro-santos', {
                day: selectDay,
                text: inputTask
            })
            .then(response => {

            })
            .catch(err => {
                window.alert(err)
            })
    }

    return(
        <div>
            <Container>
                <FormControl className={classes.formControl}>
                    <InputLabel id="label">Insira o dia</InputLabel>
                    <Select 
                        labelId="label"
                        value={selectDay}
                        onChange={event => setSelectDay(event.target.value)}
                        >
                        <MenuItem value="domingo">Domingo</MenuItem>
                        <MenuItem value="segunda">Segunda</MenuItem>
                        <MenuItem value="terca">Terça</MenuItem>
                        <MenuItem value="quarta">Quarta</MenuItem>
                        <MenuItem value="quinta">Quinta</MenuItem>
                        <MenuItem value="sexta">Sexta</MenuItem>
                        <MenuItem value="sabado">Sábado</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField 
                        label="Insira sua tarefa"
                        value={inputTask}
                        onChange={event => setInputTask(event.target.value)}
                        ></TextField>
                </FormControl>
                    
            </Container>
            <Button color="primary" variant="contained" onClick={postTask}>Confirmar</Button>
        </div>
    )
}

export default NewTask
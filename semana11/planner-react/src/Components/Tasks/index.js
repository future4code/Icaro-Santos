import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UpdateTasks from '../../Hooks/updateTasks'
import {PaperWrapper} from './style'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const Tasks = (props) => {    

    const domingo = props.taskList.filter((task) => {
        return task.day === "domingo"
    })

    const segunda = props.taskList.filter((task) => {
        return task.day === "segunda"
    })

    const terca = props.taskList.filter((task) => {
        return task.day === "terca"
    })

    const quarta = props.taskList.filter((task) => {
        return task.day === "quarta"
    })

    const quinta = props.taskList.filter((task) => {
        return task.day === "quinta"
    })

    const sexta = props.taskList.filter((task) => {
        return task.day === "sexta"
    })

    const sabado = props.taskList.filter((task) => {
        return task.day === "sabado"
    })

    return(
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Domingo</Typography>
                        {domingo.map((task) => {
                            return <li onClick={() => props.deleteTask(task.id)}>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Segunda</Typography>
                        {segunda.map((task) => {
                            return <li onClick={() => props.deleteTask(task.id)}>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Terça</Typography>
                        {terca.map((task) => {
                            return <li onClick={() => props.deleteTask(task.id)}>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Quarta</Typography>
                        {quarta.map((task) => {
                            return <li onClick={() => props.deleteTask(task.id)}>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Quinta</Typography>
                        {quinta.map((task) => {
                            return <li onClick={() => props.deleteTask(task.id)}>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Sexta</Typography>
                        {sexta.map((task) => {
                            return <li onClick={() => props.deleteTask(task.id)}>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Sábado</Typography>
                        {sabado.map((task) => {
                            return <li onClick={() => props.deleteTask(task.id)}>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Tasks
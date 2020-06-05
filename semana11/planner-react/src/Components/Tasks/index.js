import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UpdateTasks from '../../Hooks/updateTasks'
import {PaperWrapper} from './style'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const Tasks = () => {
    const [taskList, setTaskList] = useState([

    ])

    useEffect(() => {
        takeTasks()
    }, [])

    const takeTasks = () => {
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-icaro-santos')
            .then(response => {
                setTaskList(response.data)
            })
            .catch(err => {
                window.alert(err)
            })
    }

    const domingo = taskList.filter((task) => {
        return task.day === "domingo"
    })

    const segunda = taskList.filter((task) => {
        return task.day === "segunda"
    })

    const terca = taskList.filter((task) => {
        return task.day === "terca"
    })

    const quarta = taskList.filter((task) => {
        return task.day === "quarta"
    })

    const quinta = taskList.filter((task) => {
        return task.day === "quinta"
    })

    const sexta = taskList.filter((task) => {
        return task.day === "sexta"
    })

    const sabado = taskList.filter((task) => {
        return task.day === "sabado"
    })

    const deleteTask = (id) => {
        if(window.confirm("Tem certeza que deseja excluir a tarefa?")){
            axios
                .delete('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-icaro-santos/' + id)
                .then(response => {

                })
                .catch(err => {
                    window.alert(err)
                })
            
            }
        takeTasks()
    }

    return(
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Domingo</Typography>
                        {domingo.map((task) => {
                            return <li>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Segunda</Typography>
                        {segunda.map((task) => {
                            return <li onClick={() => deleteTask(task.id)}>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Terça</Typography>
                        {terca.map((task) => {
                            return <li>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Quarta</Typography>
                        {quarta.map((task) => {
                            return <li>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Quinta</Typography>
                        {quinta.map((task) => {
                            return <li>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Sexta</Typography>
                        {sexta.map((task) => {
                            return <li>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaperWrapper>
                        <Typography variant="h4">Sábado</Typography>
                        {sabado.map((task) => {
                            return <li>{task.text}</li>
                        })}
                    </PaperWrapper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Tasks
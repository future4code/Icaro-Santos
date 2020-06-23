import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import NewTask from './Components/NewTask'
import Tasks from './Components/Tasks'

function App() {
  const [inputTask, setInputTask] = useState('')
  const [selectDay, setSelectDay] = useState('')
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
   updateTasks()
  }, [setTaskList])

  const updateTasks = () => {
    axios
      .get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-icaro-santos')
      .then(response => {
        setTaskList(response.data)
      })
      .catch(err => {
        window.alert(err)
      })
  }

  const postTask = () => {
    axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-icaro-santos', {
        day: selectDay,
        text: inputTask
      })
      .then(response => {
        updateTasks()
        setInputTask('')
        setSelectDay('')
      })
      .catch(err => {
        window.alert(err)
      })
  }

  const deleteTask = (id) => {
    if(window.confirm("Tem certeza que deseja excluir esta tarefa?")){
      axios
        .delete('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-icaro-santos/' + id)
        .then(response => {
          updateTasks()
        })
        .catch(err => {
          window.alert(err)
        })
    }
  }

  return (
    <div className="App">
      <NewTask
        inputTask={inputTask}
        selectDay={selectDay}
        setInputTask={event => setInputTask(event.target.value)}
        setSelectDay={event => setSelectDay(event.target.value)}
        postTask={postTask}
        />
      <Tasks
        taskList={taskList}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;

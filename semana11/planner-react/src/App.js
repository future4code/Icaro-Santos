import React from 'react';
import './App.css';
import NewTask from './Components/NewTask'
import Tasks from './Components/Tasks'

function App() {
  return (
    <div className="App">
      <NewTask/>
      <Tasks/>
    </div>
  );
}

export default App;

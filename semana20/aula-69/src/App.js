import React, {useState} from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [link, setLink] = useState(undefined)

  const handleFile = async(event) => {
    try{
      const data = new FormData()

      data.append('file', event.target.files[0])

      const res = await axios.put('http://localhost:3003/files/upload', data)
      setLink(res.data.link)
    }
    catch(err){

    }
  }
  return (
    <div className="App">
      <input type="file" onChange={handleFile} />
      {link && <div>
        <img src={link} alt="teste" />
        <p><a href={link}>Link do bagulho</a></p>
      </div>}
      
    </div>
  );
}

export default App;

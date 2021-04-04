import React, {useState} from 'react';
import './App.css';
import Form from './components/form'
import Cards from './components/Cards'

function App() {
  const [inputText,setInputText]=useState('');
  const [data, setdata]=useState([]);
  return (
    <div className="App">
      <h1>To do app</h1>
      <Form inputText={inputText} setInputText={setInputText} data={data} setdata={setdata}/>
      <Cards data={data}/>
    </div>
  );
}

export default App;

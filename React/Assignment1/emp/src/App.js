import React, {useState} from 'react';
import './App.css';
import Form from './components/form'
import Cards from './components/Cards'


function App() {
  const [nameText,setnameText]=useState('');
  const [birthText,setbirthText]=useState('');
  const [depText,setdepText]=useState('');
  const [expText,setexpText]=useState('');
  const [data, setdata]=useState([]);
  return (
    <div className="App">
      <h1>To do app</h1>

      <Form nameText={nameText} birthText={birthText} setbirthText={setbirthText} 
      depText={depText} setdepText={setdepText} expText={expText} setexpText={setexpText}
      setnameText={setnameText} data={data} setdata={setdata}/>
      <Cards data={data} setdata={setdata}/>

    </div>
  );
}

export default App;

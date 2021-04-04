import React from 'react'

function Form({inputText, setInputText, data, setdata}) {
    
    const inputHandler=(e)=>{
        setInputText(e.target.value);
    }
    
    const submitHandler=(e)=>{
        e.preventDefault();
        setdata([...data, 
            { text:inputText, id:Math.random()*1000}
        
        ]);
        console.log(data);
        setInputText('');
    };
    return (
        <form>    
            <input onChange={inputHandler} type="text" className="fname" value={inputText}/>
            
            <button onClick={submitHandler} type="button">Click Me!</button>
        </form> 
    );
}

export default Form;

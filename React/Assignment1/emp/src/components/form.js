import React from 'react'

function Form({nameText, setnameText, birthText,setbirthText, depText,setdepText,expText,setexpText, data, setdata}) {

    const nameHandler=(e)=>{
        let text= e.target.value;
        var letters = /[a-zA-Z ]+/;
   if(!text.match(letters))
   { alert("Please Use Alphabets Only");}
       else setnameText(e.target.value);
    }
    
    const birthHandler=(e)=>{
        setbirthText(e.target.value);
    }
    
    const depHandler=(e)=>{
        setdepText(e.target.value);
    }
    
    const expHandler=(e)=>{
        let num = e.target.value;

        if (!Number(num)) {
            alert("Please Use Numbers Only");
        }
        else setexpText(e.target.value);
    }
    
    const submitHandler=(e)=>{
        e.preventDefault();
        setdata([...data, 
            { name:nameText,birth:birthText,dep:depText, exp:expText ,id:Math.random()*1000}
        
        ]);
        setnameText('');
        setbirthText('');
        setdepText('');
        setexpText('');
    };
    return (
        <form>  
            Employee Name: <input onChange={nameHandler} type="text" className="fname" value={nameText} placeholder="Employee Name"/><br></br>
            DOB: <input onChange={birthHandler} type="date" className="fname" value={birthText}/><br></br>
            Department: <input onChange={depHandler} type="text" className="fname" value={depText} placeholder="Department"/>  <br></br>
            Experience in Years<input onChange={expHandler} type="text" className="fname" value={expText} placeholder="in Numbers Only"/><br></br>
            <button onClick={submitHandler} type="button">Submit</button>
        </form> 
    );
}

export default Form;

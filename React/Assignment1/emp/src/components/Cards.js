import React from 'react'
import Card from './Card'
function Cards({data,setdata,setnameText,setbirthText,setdepText,setexpText}) {
    
    return (

<div className="main">
    <h2>List Of Employees</h2>
    
        <div>
            {data.map((metadata)=>(
            <Card 
            metadata={metadata}
            data={data} setdata={setdata}
             key={metadata.id} name={metadata.name} birth={metadata.birth} 
             dep={metadata.dep} exp={metadata.exp}
             
            setbirthText={setbirthText} 
            setdepText={setdepText}setexpText={setexpText}
             setnameText={setnameText} 
             
             />   
                        ))}
        </div>
</div>


        
        
    );
}

export default Cards;

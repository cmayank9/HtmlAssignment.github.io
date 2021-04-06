import React from 'react'
import Card from './Card'
function Cards({data,setdata}) {
    
    return (

<div className="main">
    <h2>List Of Employees</h2>
    
        <div>
            {data.map((metadata)=>(
            <Card  
            metadata={metadata}
            data={data} setdata={setdata}
             key={metadata.id} name={metadata.name} birth={metadata.birth} 
             dep={metadata.dep} exp={metadata.exp}/>   
                        ))}
        </div>
</div>


        
        
    );
}

export default Cards;

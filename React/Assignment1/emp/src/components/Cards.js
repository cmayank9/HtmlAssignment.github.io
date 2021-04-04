import React from 'react'
import Card from './Card'
function Cards({data}) {
    console.log(data);
    return (
        <ul>
        {data.map((metadata)=>(
            <Card key={metadata.id} text={metadata.text}/>   
        ))}

        </ul>
        
    );
}

export default Cards;

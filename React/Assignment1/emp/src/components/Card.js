import React from 'react'

function Card({name, birth, dep, exp, data, setdata,metadata}) {

const deleteHandler=()=>{

setdata(data.filter(el=>el.id!==metadata.id));
};

const editHandler=()=>{
    setdata(data.filter(el=>el.id!==metadata.id));
}
    return (

<div className="column">
    <div className="card">
    <b>
    <h3>{name}</h3>
      <p>{dep}</p>

      <p>DOB: {birth}</p>
    <p>Experience in Years:- {exp}</p>
    </b>
      <button className="button-e" onClick={editHandler}>Edit</button>
        <button className="button-d" onClick={deleteHandler}>Del</button>
    </div>
  </div>
    );
}

export default Card;

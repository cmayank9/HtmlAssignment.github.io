import React from 'react'

function Card({name, birth, dep, exp, data, setdata,metadata,
  setnameText, setbirthText, setdepText, setexpText}) {

const deleteHandler=()=>{

setdata(data.filter(el=>el.id!==metadata.id));
};

const editHandler=()=>{
  const filtereditem=data.filter(el=>el.id!==metadata.id);
  setdata([...filtereditem, 
  ]);
  setnameText(name); 
  setbirthText(birth);
  setdepText(dep);
  setexpText(exp);

 
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

import React from 'react';
import LineIcon from 'react-lineicons';


function Smalltitle(props){
  return (
    <div className="mi-smalltitle">
      <span className="mi-smalltitle-icon">
        <LineIcon name={props.icon}/>
      </span>
      <h4>{props.title}</h4>
    </div>
  )
}

export default Smalltitle;

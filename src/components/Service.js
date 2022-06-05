import React from 'react';
import LineIcon from "react-lineicons";

function Service(props){
  return (
    <div className="mi-service">
      <span className="mi-service-icon">
        <LineIcon name={props.content.icon} />
      </span>
      <h5>{props.content.title}</h5>
      <p>{props.content.details}</p>
    </div>
  )
}

export default Service;

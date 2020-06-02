import React from "react";

function Progress(props){
  return (
    <div className="mi-progress">
      <h6 className="mi-progress-title">{props.title}</h6>
      <div className="mi-progress-inner">
        <div className="mi-progress-percentage">{`${props.percentage}%`}</div>
        <div className="mi-progress-container">
          <span
            className="mi-progress-active"
            style={props.isVisible ? {width: `${props.percentage}%`} : {width: 0}}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Progress;

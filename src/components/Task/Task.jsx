import React from "react";
import "./Task.css";

const Task = ({ icon, name, time }) => {
  return (
    <div className="tasks flex">
      <img className="task_picture" src={icon} alt="" />
      <div className="langs">
        <h5 className="text_headings headFive">{name}</h5>
        <div className="small_text">{time}</div>
      </div>
    </div>
  );
};

export default Task;

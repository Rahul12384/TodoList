import { useState } from "react";
import "./ListForm.css";

const ListForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const tasksData={
      task:taskName,
    }
    if(tasksData.task.length>0){
      props.onSaveTasksData(tasksData)
      setTaskName('')

    } 
    
  };

  const taskChangeHandler=(event)=>{
    setTaskName(event.target.value);
  }
  return (
    <div className="listform">
      <form onSubmit={submitHandler}>
        <label className="listform-label">Rahul girl Friend List:</label>
        <input type="text" value={taskName} onChange={taskChangeHandler}></input>
        <button className=" listform-button" type="submit">
          Add To List
        </button>
      </form>
    </div>
  );
};

export default ListForm;

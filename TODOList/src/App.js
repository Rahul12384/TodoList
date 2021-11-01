import List from "./components/List";
import ListForm from "./components/ListForm";
import "./App.css";
import { useState } from "react";

// const initialList = [
//   {
//     id: 1,
//     task: "buy apples",
//   },
//   {
//     id: 2,
//     task: "wash car",
//   },
// ];

function App() {
  
  //localStorage.setItem('li',JSON.stringify([]))
  //JSON.parse(localStorage.getItem('li'))
  const [list,setList]=useState(JSON.parse(localStorage.getItem('li')));

  const saveTasksDataHandler=(enteredTasksData)=>{
    const tasksData={
      ...enteredTasksData,
      id: Math.random().toString(),
    }
    //console.log(tasksData);
    
    setList(prevList=>{
      const abc=[tasksData,...prevList]
      localStorage.setItem('li',JSON.stringify(abc))
      return([tasksData,...prevList]);
    })
    
    //console.log(list);

}

  const taskDeleteHandler=(taskId)=>{
    //console.log(taskId)
    setList((prevList)=>{
      const newList=prevList.filter((li)=> li.id!==taskId)
      localStorage.setItem('li',JSON.stringify(newList))
      return newList;
    })
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No tasks found. Maybe add one?</p>
  );

  if (list.length > 0) {
    content = (
      <List items={JSON.parse(localStorage.getItem('li'))} onDel={taskDeleteHandler}></List>
    );
  }  

  return (
    <div className="app">
      <div className="app-list">
        <div className="app-listform">
          <ListForm onSaveTasksData={saveTasksDataHandler}/>
        </div>
        <div className="app-list-item">
          {content}
        </div>
      </div>
    </div>
  );
}

export default App;

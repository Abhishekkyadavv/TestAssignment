import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
const [taskAdd,setTaskAdd]=useState([]);
const [newTask,setNewTask]=useState('');
const HandleInput=(e)=>{
  console.log(e.target.value)
  setNewTask(e.target.value);

}
const AddTask=()=>{
  setTaskAdd([...taskAdd,{text:newTask,complete:false,id:Date.now()}])
  setNewTask('');
}
const HandleDelete=(taskId)=>{
  const UpdateTask=taskAdd.filter((taskIs)=>taskIs.id != taskId)
  setTaskAdd(UpdateTask);

}
console.log(taskAdd);
  return (
  <>
<h1>Todo App</h1>
<input type='text' value={newTask} onChange={(e)=>HandleInput(e)}/>
<button onClick={()=>AddTask()}>Add</button>

<ul>
 {taskAdd && taskAdd.map((val)=>{
 return  <li key={val.id} className='styleRemove'>
 <span className='textStyle'> {val.text}</span><button onClick={()=>HandleDelete(val.id)}>X</button>
  </li>
 })} 
</ul>
  </>
  );
}

export default App;

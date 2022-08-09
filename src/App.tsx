import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';
import { Todo } from './interfaces';


function App() {
  const [todo,setTodo]=useState<string>("");
  const [tasks,setTasks]=useState<Todo[]>([]);
  

  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTasks([...tasks,{id:Date.now(),todo,isDone:false}])
    }
    setTodo("")
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <ToDoList tasks={tasks} setTasks={setTasks}/>
      </main>
    </div>
  );
}

export default App;

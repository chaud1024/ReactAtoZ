import React, { useState } from "react";
import './App.css';
import Form from "./components/Form";
import Lists from "./components/Lists";



export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => { // get an event
    e.preventDefault();

    // creating new todo
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    }

    // updating newTodo into the original todoData
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
}

    return (
      <div className="container">
        <div className="todoBlock">

          <div className="title">
          <h1>할 일 목록</h1>
          </div>

          <Lists
            todoData={todoData}
            setTodoData={setTodoData}
          />
          
          <Form
            value={value}
            setValue={setValue}
            handleSubmit={handleSubmit}
          />

        </div>
      </div>
    )
}
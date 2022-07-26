import React, { useState, useCallback } from "react";
import './App.css';
import Form from "./components/Form";
import Lists from "./components/Lists";


export default function App() {

  console.log('App Component');

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleClick = useCallback((id) => { // data.id to the parameter(which I clicked THAT id)
    let newTodoData = todoData.filter(data => data.id !== id); // (id: THAT id what I clicked)
    setTodoData(newTodoData);
  }, [todoData]);

  
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
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">

          <div className="flex justify-between mb-3">
            <h1>할 일 목록</h1>
          </div>

          <Lists
            todoData={todoData}
            setTodoData={setTodoData}
            handleClick={handleClick}
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
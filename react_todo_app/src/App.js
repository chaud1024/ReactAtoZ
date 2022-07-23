import React, { Component } from "react";
import './App.css';

export default class App extends Component {

  state= {
    todoData : [
      {
        id: "1",
        title: "공부하기",
        completed: true,
      },
      {
        id: "2",
        title: "청소하기",
        completed: false,
      },
      {
        id: "3",
        title: "노션세팅",
        completed: false,
      }
    ]
  }

  btnStyle = {
    color : "#fff",
    border : "none",
    padding : "5px 9px",
    borderRadius : "50%",
    cursor : "pointer",
    float : "right"
  }

  getStyle = () => {
   return {
    padding : "10px",
    borderBottom : "1px #ccc dotted",
    TextDecoder : "none"
   } 
  }



  handleClick = (id) => { // data.id to the parameter(which I clicked THAT id)
    let newTodoData = this.state.todoData.filter(data => data.id !== id); // (id: THAT id what I clicked)
    this.setState({ todoData : newTodoData});
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">

          <div className="title">
          <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={false} />
                {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>X</button>
          </div>
          ))}
          
          

        </div>
      </div>
    )
  }
}
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
    ],
    value : ""
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

  handleChange = (e) => { // get an event
    // console.log('e', e.target.value) 
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => { // get an event
    e.preventDefault();

    // creating new todo
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    }

    // updating newTodo into the original todoData
    this.setState({ todoData: [...this.state.todoData, newTodo] })
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
          
          <form style={{ display : "flex" }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: '10', padding: '5px'}}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value} // the value which in the state above
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: '1'}}

            />
          </form>

        </div>
      </div>
    )
  }
}
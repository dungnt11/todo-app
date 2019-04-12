import React, { Component } from "react";

export let TaskContext = React.createContext();

export class DataContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      statusAdd: false
    };
  }

  random() {
    let temp = ((1 + Math.random()) * 0x1000).toString(16).substring(1);
    return temp + temp + "-" + temp + "-" + temp;
  }
  changeStatus = () => {
    this.setState({
      statusAdd: !this.state.statusAdd
    });
  };

  addWork = event => {
    let newTask = {
      id: this.random(),
      ...event
    };
    this.setState(
      {
        tasks: this.state.tasks.concat(newTask)
      },
      () => localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
    );
  };

  componentDidMount() {
    this.setState({
      tasks: JSON.parse(localStorage.getItem("tasks"))
    });
  }
  render() {
    return (
      <TaskContext.Provider
        value={{
          status: this.state.statusAdd,
          setTask: this.changeStatus,
          addWork: this.addWork,
          data: this.state.tasks
        }}
      >
        {this.props.children}
      </TaskContext.Provider>
    );
  }
}

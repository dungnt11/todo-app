import React, { Component } from "react";
import "./App.css";

import Add from "./Components/Add";
import Search from "./Components/Search";
import Sort from "./Components/Sort";
import Table from "./Components/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: "",
      isShow: false
    };
    this.ramdomID = this.ramdomID.bind(this);
    this.setValue = this.setValue.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.newPerson = this.newPerson.bind(this);
  }
  ramdomID() {
    let rd = ((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return rd + rd + "-" + rd + "-" + rd + rd;
  }

  setValue() {
    let task = [
      { id: this.ramdomID(), name: "Di hoc", status: false },
      { id: this.ramdomID(), name: "An com", status: true },
      { id: this.ramdomID(), name: "Ngu", status: false }
    ];
    this.setState({
      work: task
    });

    localStorage.setItem("info", JSON.stringify(task));
  }
  componentWillMount() {
    this.setState({
      work: JSON.parse(localStorage.getItem("info"))
    });
  }

  changeStatus() {
    this.setState({
      isShow: false
    });
  }
  newPerson(value) {
    let obj = {
      id: this.ramdomID(),
      ...value
    };
    let temp = this.state.work.concat(obj);
    this.setState({
      work: temp
    });
    localStorage.setItem("info", JSON.stringify(temp));
  }
  render() {
    const { isShow } = this.state;
    let status = isShow ? (
      <Add newPerson={this.newPerson} status={this.changeStatus} />
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              this.state.isShow ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {status}
          </div>
          <div
            className={
              this.state.isShow
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              onClick={() => this.setState({ isShow: true })}
              type="button"
              className="btn btn-primary"
            >
              <span className="fa fa-plus mr-5" />
              Thêm Công Việc
            </button>
            <button
              onClick={this.setValue}
              type="button"
              className="ml-4 btn btn-danger"
            >
              <span className="fa fa-check mr-5" /> Random
            </button>
            <div className="row mt-15">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Search />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Sort />
              </div>
            </div>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Table congViec={this.state.work} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

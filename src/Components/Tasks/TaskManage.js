import React, { Component } from "react";
import Add from "./Add";
import Search from "./Search";
import Sort from "./Sort";
import Table from "./Table";

import { DataContext, TaskContext } from "./DataContext";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colDefault: ["", "col-xs-12 col-sm-12 col-md-12 col-lg-12"]
    };
  }

  showForm(status) {
    if (!status) {
      this.setState({
        colDefault: [
          "col-xs-4 col-sm-4 col-md-4 col-lg-4",
          "col-xs-8 col-sm-8 col-md-8 col-lg-8"
        ]
      });
    } else {
      this.setState({
        colDefault: ["", "col-xs-12 col-sm-12 col-md-12 col-lg-12"]
      });
    }
  }

  render() {
    return (
      <DataContext>
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
          <div className="row">
            <div className={this.state.colDefault[0]}>
              <Add />
            </div>
            <div className={this.state.colDefault[1]}>
              <TaskContext.Consumer>
                {({ setTask, status }) => {
                  return (
                    <button
                      onClick={() => {
                        setTask();
                        this.showForm(status);
                      }}
                      type="button"
                      className="btn btn-primary"
                    >
                      <span className="fa fa-plus mr-5" />
                      Thêm Công Việc
                    </button>
                  );
                }}
              </TaskContext.Consumer>
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
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DataContext>
    );
  }
}

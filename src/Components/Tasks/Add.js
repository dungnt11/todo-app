import React, { Component } from "react";
import { TaskContext } from "./DataContext";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: 0
    };
  }

  changeWork = event => {
    let target = event.target;
    let name = target.name;
    let value =
      target.name === "status" ? JSON.parse(target.value) : target.value;
    this.setState({
      [name]: value
    });
  };

  submitAdd = event => {
    event(this.state);
    this.setState({
      name: "",
      status: 0
    });
  };

  resetForm = () => {
    this.setState({
      name: "",
      status: 0
    });
  };
  render() {
    return (
      <TaskContext.Consumer>
        {({ status, addWork }) => {
          if (status) {
            return (
              <div className="panel panel-warning">
                <div className="panel-heading">
                  <h3 className="panel-title">Thêm Công Việc</h3>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label>Tên :</label>
                    <input
                      onChange={this.changeWork}
                      value={this.state.name}
                      type="text"
                      name="name"
                      className="form-control"
                    />
                  </div>
                  <label>Trạng Thái :</label>
                  <select
                    onChange={this.changeWork}
                    value={this.state.status}
                    className="form-control"
                    name="status"
                    required="required"
                  >
                    <option value="1">Kích Hoạt</option>
                    <option value="0">Ẩn</option>
                  </select>
                  <br />
                  <div className="text-center">
                    <button
                      onClick={() => this.submitAdd(addWork)}
                      className="btn btn-warning"
                    >
                      Thêm
                    </button>
                    &nbsp;
                    <button onClick={this.resetForm} className="btn btn-danger">
                      Hủy Bỏ
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </TaskContext.Consumer>
    );
  }
}

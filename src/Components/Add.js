import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.submitWork = this.submitWork.bind(this);
    this.changeState = this.changeState.bind(this);
    this.state = {
      nameWork: "",
      statusWork: true
    };
  }

  submitWork(event) {
    event.preventDefault();
    console.log(this.state)
  }
  changeState(event) {
    let target = event.target;
    let name = target.name;
    let value = name === 'statusWork' ? JSON.parse(target.value) : target.value;
    console.log(typeof value)
    this.setState({
      [name]: value
    });
  }

  render() {
    const { status } = this.props;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title float-left">Thêm Công Việc</h3>
          <i
            className="fas fa-times-circle float-right"
            style={{ cursor: "pointer" }}
            onClick={status}
          />
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Tên :</label>
              <input
                value={this.state.nameWork}
                onChange={this.changeState}
                type="text"
                name="nameWork"
                className="form-control"
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              value={this.state.statusWork}
              onChange={this.changeState}
              name="statusWork"
              className="form-control"
              required="required"
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button
                onClick={this.submitWork}
                type="submit"
                className="btn btn-warning"
              >
                Thêm
              </button>
              &nbsp;
              <button type="submit" className="btn btn-danger">
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

import HeaderTable from "./HeaderTable";

export default class extends Component {
  render() {
    const { congViec } = this.props;
    let taskItem = congViec.map((task, index) => {
      return (
        <tr key={task.id}>
          <td>{index}</td>
          <td>{task.name}</td>
          <td className="text-center">
            <span
              className={
                task.status ? "label label-success" : "label label-danger"
              }
            >
              {task.status ? "Kích hoạt" : "Ẩn"}
            </span>
          </td>
          <td className="text-center">
            <button type="button" className="btn btn-warning">
              <span className="fa fa-pencil mr-5" />
              Sửa
            </button>
            &nbsp;
            <button type="button" className="btn btn-danger">
              <span className="fa fa-trash mr-5" />
              Xóa
            </button>
          </td>
        </tr>
      );
    });
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <HeaderTable />
          {taskItem}
        </tbody>
      </table>
    );
  }
}

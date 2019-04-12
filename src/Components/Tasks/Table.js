import React, { Component } from "react";

import HeaderTable from "./HeaderTable";
import { TaskContext } from "./DataContext";

export default class extends Component {
  render() {
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
          <TaskContext.Consumer>
            {({ data, editTask }) => {
              return data.map((e, index) => {
                return (
                  <tr key={e.id}>
                    <td>{index}</td>
                    <td>{e.name}</td>
                    <td className="text-center">
                      <span
                        className={
                          e.status
                            ? "label label-success"
                            : "label label-danger"
                        }
                      >
                        {e.status ? "Kích hoạt" : "Ẩn"}
                      </span>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => editTask(e)}
                        type="button"
                        className="btn btn-warning"
                      >
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
            }}
          </TaskContext.Consumer>
        </tbody>
      </table>
    );
  }
}

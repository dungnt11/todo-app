import React, { Component } from "react";

import HeaderTable from "./HeaderTable";

export default class extends Component {
  constructor(props) {
    super(props);
  }

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
          <tr>
            <td>1</td>
            <td>Học lập trình</td>
            <td className="text-center">
              <span className="label label-success">Kích Hoạt</span>
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
        </tbody>
      </table>
    );
  }
}

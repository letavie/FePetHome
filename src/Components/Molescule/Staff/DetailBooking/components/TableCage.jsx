import React from "react";

export default function TableCage({ res }) {
  return (
    <div>
      <table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>ID lồng: </b>
            </td>
            <td>{res._id}</td>
          </tr>
          <tr>
            <td>
              <b>Tên lồng: </b>
            </td>
            <td className="capitalize">{res.name}</td>
          </tr>
          <tr>
            <td>
              <b>Ảnh: </b>
            </td>
            <td>
              <img src={res.image} alt="" width={60} className="rounded-sm" />
            </td>
          </tr>
          <tr>
            <td>
              <b>Mô tả: </b>
            </td>
            <td>{res.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

import React from "react";

const Display = ({ tableData }) => {
  //   console.log(tableData);
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((el, idx) => {
          return (
            <tr key={idx}>
              <td>{el.date}</td>
              <td>{el.views}</td>
              <td>{el.article}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Display;

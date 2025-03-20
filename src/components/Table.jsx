import React, { useEffect, useState } from "react";
import { data } from "./data";
import Display from "./Display";
const Table = () => {
  const [opsData, setOpsData] = useState([]);

  useEffect(() => {
    setOpsData(data);
  }, []);

  function sortByDate() {
    const sortedData = [...opsData].sort((a, b) => {
      if (a.date !== b.date) {
        return new Date(b.date) - new Date(a.date);
      }
      return b.views - a.views;
    });

    setOpsData(sortedData);
  }
  function sortByViews() {
    const sortedData = [...opsData].sort((a, b) => b.views - a.views);
    setOpsData(sortedData);
  }
  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <Display tableData={opsData} />
    </>
  );
};

export default Table;

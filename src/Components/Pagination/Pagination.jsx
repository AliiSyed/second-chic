import React from "react";
import "./Pagination.css";
const Pagination = () => {
  return (
    <div className="pagination">
      <button className="pagination-active-btn">01</button>
      <button>02</button>
      <button>03</button>
      <button>04</button>
      <p>...</p>
      <button>250</button>
    </div>
  );
};

export default Pagination;

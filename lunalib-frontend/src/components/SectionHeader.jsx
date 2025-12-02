import React from "react";

function SectionHeader({ title, count }) {
  return (
    <div className="section-header">
      <h3>{title}</h3>
      <span className="section-count">{count} Books</span>
    </div>
  );
}

export default SectionHeader;

import React from "react";

const FILTERS = [
  { id: "all", label: "All Books" },
  { id: "in-progress", label: "In Progress" },
  { id: "unread", label: "Unread" },
  { id: "completed", label: "Completed" },
  { id: "wishlist", label: "Wishlist" }
];

function FiltersSidebar({ activeFilter, onChange }) {
  return (
    <aside className="filters-sidebar">
      <div className="sidebar-group">
        <label className="filters-title">Filters</label>
        <ul className="filters-list">
          {FILTERS.map(filter => (
            <li key={filter.id}>
              <label>
                <input
                  type="radio"
                  name="filter"
                  checked={activeFilter === filter.id}
                  onChange={() => onChange(filter.id)}
                />
                {filter.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default FiltersSidebar;

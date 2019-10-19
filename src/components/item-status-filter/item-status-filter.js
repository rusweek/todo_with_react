import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button"
              className="btn btn-primary">All</button>
      <button type="button"
              className="btn btn-outline-info">Active</button>
      <button type="button"
              className="btn btn-outline-info">Done</button>
    </div>
  );
};

export default ItemStatusFilter;

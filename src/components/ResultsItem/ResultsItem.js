import React from 'react';

const ResultsItem = ({ title, value }) => {
  return (
    <div className="results-item">
      <span className="results-title">{title}</span>
      <span className="results-value">{value}</span>
    </div>
  );
};

export default ResultsItem;

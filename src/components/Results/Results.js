import React from 'react';

const Results = ({ total }) => {
  return (
    <section id='resultados'>
      <div>
      {total !== undefined && total !== null && (
        <div className="results-item">
          <span className="total-label">Total:</span>
          <div className="total-container">
            <span className="total-value">{`R$ ${total}`}</span>
            <span className="lucro-text">[LUCRO]</span>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Results;

import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                className={`btn-move ${currentMove === move ? 'active' : ''}`}
                type="button"
                onClick={() => {
                  moveTo(move);
                }}
              >
                {move === 0 ? `Go to Start of Game` : `Go to Move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;

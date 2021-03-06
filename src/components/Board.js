import React from 'react';
import Square from './Square';

const Board = ({ board, handleOnClick, winningSquares }) => {
  const renderOnClick = position => {
    const isWinningSquare = winningSquares.includes(position);

    return (
      <Square
        value={board[position]}
        onClick={() => handleOnClick(position)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderOnClick(0)}
        {renderOnClick(1)}
        {renderOnClick(2)}
      </div>

      <div className="board-row">
        {renderOnClick(3)}
        {renderOnClick(4)}
        {renderOnClick(5)}
      </div>

      <div className="board-row">
        {renderOnClick(6)}
        {renderOnClick(7)}
        {renderOnClick(8)}
      </div>
    </div>
  );
};

export default Board;

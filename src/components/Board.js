import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(false);

  const handleOnClick = position => {
    if (board[position]) return;

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) return isXTurn ? 'X' : 'O';
        return square;
      });
    });
    setIsXTurn(prev => !prev);
  };

  const renderOnClick = position => {
    return (
      <Square value={board[position]} onClick={() => handleOnClick(position)} />
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

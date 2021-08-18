import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';
import './style/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(false);

  const winner = calculateWinner(board);
  const massage = winner
    ? `Winner is ${winner}`
    : `Next Player Turn ${isXTurn ? 'X' : 'O'}`;

  const handleOnClick = position => {
    if (board[position] || winner) return;

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) return isXTurn ? 'X' : 'O';
        return square;
      });
    });
    setIsXTurn(prev => !prev);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{massage}</h2>
      <Board board={board} handleOnClick={handleOnClick} />
    </div>
  );
};

export default App;

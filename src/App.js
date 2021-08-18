import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';
import History from './components/History';
import './style/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    {
      board: Array(9).fill(null),
      isXTurn: true,
    },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  const massage = winner
    ? `Winner is ${winner}`
    : `Next Player Turn ${current.isXTurn ? 'X' : 'O'}`;

  const handleOnClick = position => {
    if (current.board[position] || winner) return;

    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) return current.isXTurn ? 'X' : 'O';
        return square;
      });
      return prev.concat({ board: newBoard, isXTurn: !last.isXTurn });
    });
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{massage}</h2>
      <Board board={current.board} handleOnClick={handleOnClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;

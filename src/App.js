import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';
import History from './components/History';
import StatusMassage from './components/StatusMassage';
import './style/root.scss';

const NEW_GAME = [
  {
    board: Array(9).fill(null),
    isXTurn: true,
  },
];

const App = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

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

  const newGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <StatusMassage winner={winner} current={current} />
      <Board
        board={current.board}
        handleOnClick={handleOnClick}
        winningSquares={winningSquares}
      />
      <button type="button" onClick={newGame}>
        Start New Game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;

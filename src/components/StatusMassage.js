import React from 'react';

const StatusMassage = ({ winner, current }) => {
  const noMoveLeft = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMoveLeft &&
        `Next Player Turn ${current.isXTurn ? 'X' : 'O'}`}
      {!winner && noMoveLeft && `It's a Tie!`}
    </h2>
  );
};

export default StatusMassage;

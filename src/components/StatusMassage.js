import React from 'react';

const StatusMassage = ({ winner, current }) => {
  const noMoveLeft = current.board.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoveLeft && (
        <>
          Next Player Turn{' '}
          <span className={current.isXTurn ? 'text-green' : 'text-orange'}>
            {current.isXTurn ? 'X' : 'O'}{' '}
          </span>
        </>
      )}
      {!winner && noMoveLeft && (
        <>
          <span style={{ fontWeight: 'bold' }}>
            <span className="text-green" style={{ fontWeight: 'bold' }}>
              X
            </span>{' '}
            and{' '}
            <span className="text-orange" style={{ fontWeight: 'bold' }}>
              O
            </span>{' '}
            played a TIE!
          </span>
        </>
      )}
    </div>
  );
};

export default StatusMassage;

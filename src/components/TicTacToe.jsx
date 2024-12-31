import React, { useState, useEffect } from "react";
import "./TicTacToe.css";
import { Link } from "react-router-dom";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  useEffect(() => {
    // If it's O's turn (AI), trigger the AI move
    if (!isXNext && !winner) {
      makeAIMove();
    }
  }, [isXNext, board, winner]);

  const handleClick = (index) => {
    // Ignore click if the cell is already filled or the game is over
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  // AI makes a move with the priority of winning or blocking
  const makeAIMove = () => {
    const ai = "O";
    const opponent = "X";
    let newBoard = [...board];

    // 1. Check if AI can win
    const winningMove = findBestMove(newBoard, ai);
    if (winningMove !== -1) {
      newBoard[winningMove] = ai;
      setBoard(newBoard);
      setIsXNext(true); // Switch to player's turn
      return;
    }

    // 2. Check if opponent can win (block the opponent)
    const blockingMove = findBestMove(newBoard, opponent);
    if (blockingMove !== -1) {
      newBoard[blockingMove] = ai;
      setBoard(newBoard);
      setIsXNext(true); // Switch to player's turn
      return;
    }

    // 3. No immediate win or block, pick a random move
    const emptyCells = newBoard.map((cell, index) => (cell === null ? index : -1)).filter(index => index !== -1);
    const randomMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    newBoard[randomMove] = ai;
    setBoard(newBoard);
    setIsXNext(true); // Switch to player's turn
  };

  // Helper function to find the best move (win or block)
  const findBestMove = (board, player) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      const cells = [board[a], board[b], board[c]];
      const emptyCellIndex = cells.indexOf(null);

      if (emptyCellIndex !== -1 && cells.filter(cell => cell === player).length === 2) {
        const emptyCellPosition = combination[emptyCellIndex];
        if (board[emptyCellPosition] === null) {
          return emptyCellPosition;
        }
      }
    }
    return -1; // No winning or blocking move found
  };

  return (
    <div className="TTTmain">
      <div className="TTTgame">
        <h1>Tic Tac Toe</h1>
        {winner ? (
          <h2>Winner: {winner}</h2>
        ) : (
          <h2>Next Player: {isXNext ? "X" : "O"}</h2>
        )}
        <div className="TTTboard">
          {board.map((cell, index) => (
            <div
              key={index}
              className="TTTcell"
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        <button className="TTTrestart" onClick={restartGame}>
          Restart Game
        </button>
      </div>
      <Link className="Link" to="/">
        <div className="TTTHome">
          <h3>Home</h3>
        </div>
      </Link>
    </div>
  );
};

// Helper function to check for a winner
const calculateWinner = (board) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

export default TicTacToe;

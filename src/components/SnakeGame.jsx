import React, { useState, useEffect } from "react";
import "./SnakeGame.css";
import { Link } from "react-router-dom";

const SnakeGame = () => {
  const generateFood = () => {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    return { x, y };
  };

  const gridSize = 10;
  const [snake, setSnake] = useState([
    { x: 5, y: 5 },
    { x: 4, y: 5 },
    { x: 3, y: 5 },
  ]);
  const [direction, setDirection] = useState("RIGHT");
  const [food, setFood] = useState(generateFood()); // Now generateFood is accessible here
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      moveSnake();
    }, 200);

    return () => clearInterval(interval);
  }, [snake, direction, gameOver]);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case "UP":
        head.y -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "RIGHT":
        head.x += 1;
        break;
      default:
        break;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood(generateFood());
      setScore(score + 1);
    } else {
      newSnake.pop();
    }

    if (checkCollision(head)) {
      setGameOver(true);
    }

    setSnake(newSnake);
  };

  const checkCollision = (head) => {
    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
      return true;
    }

    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        return true;
      }
    }

    return false;
  };

  const changeDirection = (e) => {
    if (gameOver) return;

    switch (e.key) {
      case "ArrowUp":
        if (direction !== "DOWN") setDirection("UP");
        break;
      case "ArrowDown":
        if (direction !== "UP") setDirection("DOWN");
        break;
      case "ArrowLeft":
        if (direction !== "RIGHT") setDirection("LEFT");
        break;
      case "ArrowRight":
        if (direction !== "LEFT") setDirection("RIGHT");
        break;
      default:
        break;
    }
  };

  const restartGame = () => {
    setSnake([
      { x: 5, y: 5 },
      { x: 4, y: 5 },
      { x: 3, y: 5 },
    ]);
    setDirection("RIGHT");
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    window.addEventListener("keydown", changeDirection);
    return () => window.removeEventListener("keydown", changeDirection);
  }, [direction]);

  return (
    <div className="Snakebody">
      <h1>Snake Game</h1>
      <h2>Score: {score}</h2>
      <div className="board">
        {Array.from({ length: gridSize }).map((_, row) =>
          Array.from({ length: gridSize }).map((_, col) => {
            const isSnake = snake.some((segment) => segment.x === col && segment.y === row);
            const isFood = food.x === col && food.y === row;
            return (
              <div
                key={`${row}-${col}`}
                className={`cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}
              />
            );
          })
        )}
      </div>
      {gameOver && (
        <div>
          <h2>Game Over!</h2>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
      <Link className="Link" to='/'><div className="snakeHome"><h3>Home</h3></div></Link>
    </div>
  );
};

export default SnakeGame;

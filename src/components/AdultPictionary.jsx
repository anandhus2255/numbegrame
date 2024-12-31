import React, { useState, useRef } from "react";
import "./AdultPictionary.css";

const words = [
  "Love",
  "Romance",
  "Seduction",
  "Passion",
  "Bedroom",
  "Kiss",
  "Affection",
  "Flirt",
  "Adultery",
  "Whisper",
];

const AdultPictionary = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [turn, setTurn] = useState("draw");
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState({ draw: 0, guess: 0 });
  const canvasRef = useRef(null);

  const startNewRound = () => {
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    setTurn("draw");
    setGuess("");
  };

  const handleGuess = () => {
    if (guess.toLowerCase() === currentWord.toLowerCase()) {
      setScore((prev) => ({ ...prev, guess: prev.guess + 1 }));
      alert("Correct guess!");
      startNewRound();
    } else {
      alert("Try again!");
    }
  };

  const handleDraw = (e) => {
    if (turn === "draw") {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const x = e.clientX - canvas.offsetLeft;
      const y = e.clientY - canvas.offsetTop;
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2, true);
      ctx.fill();
    }
  };

  const handleMouseDown = () => {
    canvasRef.current.addEventListener("mousemove", handleDraw);
  };

  const handleMouseUp = () => {
    canvasRef.current.removeEventListener("mousemove", handleDraw);
  };

  return (
    <div className="Apbody">
    <div className="game-container">
      <h1>Adult Pictionary</h1>
      <div className="game-info">
        <h2>Turn: {turn}</h2>
        <h2>Score - Drawer: {score.draw} | Guesser: {score.guess}</h2>
      </div>

      <div className="canvas-container">
        {turn === "draw" && (
          <div>
            <h3>Draw this word: {currentWord}</h3>
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              width="500"
              height="500"
              style={{ border: "1px solid black" }}
            ></canvas>
          </div>
        )}

        {turn === "guess" && (
          <div>
            <h3>Guess the word!</h3>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Enter your guess"
            />
            <button onClick={handleGuess}>Submit Guess</button>
          </div>
        )}
      </div>

      <button onClick={startNewRound}>Start New Round</button>
    </div>
    </div>
  );
};

export default AdultPictionary;

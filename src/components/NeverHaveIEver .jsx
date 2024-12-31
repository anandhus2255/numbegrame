import React, { useState } from "react";
import { Link } from "react-router-dom";

const NeverHaveIEver = () => {
  const [score, setScore] = useState(0);
  const [currentStatement, setCurrentStatement] = useState("");
  const [statements, setStatements] = useState([
    "Never have I ever gone skydiving.",
    "Never have I ever skipped school.",
    "Never have I ever eaten sushi.",
    "Never have I ever gotten a tattoo.",
    "Never have I ever lied to my parents.",
    "Never have I ever gone on a road trip.",
    "Never have I ever been on a rollercoaster.",
    "Never have I ever traveled to another country.",
    "Never have I ever sung in front of a crowd.",
    "Never have I ever stolen something.",
    "Never have I ever fallen in love at first sight.",
    "Never have I ever eaten something really spicy.",
    "Never have I ever broken a bone.",
    "Never have I ever been on a blind date.",
    "Never have I ever been bungee jumping.",
    "Never have I ever done something embarrassing in public.",
    "Never have I ever had a crush on a celebrity.",
    "Never have I ever cheated on a test.",
    "Never have I ever been to a concert.",
    "Never have I ever been to a theme park.",
    "Never have I ever met a famous person.",
    "Never have I ever been to a sleepover.",
    "Never have I ever had a pet snake.",
    "Never have I ever skipped a meal.",
    "Never have I ever pulled an all-nighter."
  ]);

  const getRandomStatement = () => {
    const randomIndex = Math.floor(Math.random() * statements.length);
    setCurrentStatement(statements[randomIndex]);
  };

  const handleAnswer = (answer) => {
    if (answer === "yes") {
      setScore(score + 1); // Increase score if they have done it
    }
    getRandomStatement(); // Move to the next statement
  };

  return (
    <div className="game-container">
      <h1>Never Have I Ever</h1>
      <div className="statement-container">
        <h2>{currentStatement}</h2>
      </div>
      <div className="answer-buttons">
        <button onClick={() => handleAnswer("yes")}>Yes</button>
        <button onClick={() => handleAnswer("no")}>No</button>
      </div>
      <div className="score">
        <h3>Your Score: {score}</h3>
      </div>
      <button className="next-button" onClick={getRandomStatement}>
        Next Statement
      </button>
    <Link className='Link' to='/'><div className="TODHoMe"><h3>HOME</h3></div></Link>
    </div>
  );
};

export default NeverHaveIEver;

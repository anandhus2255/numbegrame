import React, { useState, useEffect } from "react";
import './Hangman.css';

const Hangman = () => {
    const words = [
        "drishyam", 
        "kalyanaraman", 
        "premam", 
        "lucifer", 
        "bangaloredays", 
        "ennunintemoideen", 
        "manichitrathazhu", 
        "ithihasa", 
        "angamalydiaries", 
        "saltnpepper", 
        "actionherobiju", 
        "kilukkam", 
        "vadachennai", 
        "superdeluxe", 
        "kumblanginights", 
        "omar", 
        "mazhavilkavadi", 
        "chidambaram", 
        "yodha"
    ];
    
    const [word, setWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);
    const maxWrongGuesses = 6;

    useEffect(() => {
        // Randomly choose a word from the words array
        const chosenWord = words[Math.floor(Math.random() * words.length)];
        setWord(chosenWord);
        
        // Choose two random letters as clues
        const randomLetters = [];
        while (randomLetters.length < 2) {
            const randomLetter = chosenWord[Math.floor(Math.random() * chosenWord.length)];
            if (!randomLetters.includes(randomLetter)) {
                randomLetters.push(randomLetter);
            }
        }

        setGuessedLetters((prev) => [...prev, ...randomLetters]);
    }, []);

    const handleGuess = (letter) => {
        if (gameOver || guessedLetters.includes(letter)) return;

        setGuessedLetters((prev) => [...prev, letter]);

        if (!word.includes(letter)) {
            setWrongGuesses((prev) => prev + 1);
        }
    };

    const renderWord = () => {
        return word.split("").map((letter, index) => {
            return guessedLetters.includes(letter) ? (
                <span key={index}>{letter} </span>
            ) : (
                <span key={index}>_ </span>
            );
        });
    };

    const checkGameStatus = () => {
        if (wrongGuesses >= maxWrongGuesses) {
            setGameOver(true);
        }

        if (word.split("").every((letter) => guessedLetters.includes(letter))) {
            setWin(true);
            setGameOver(true);
        }
    };

    useEffect(() => {
        checkGameStatus();
    }, [guessedLetters, wrongGuesses]);

    const restartGame = () => {
        setWord(words[Math.floor(Math.random() * words.length)]);
        setGuessedLetters([]);
        setWrongGuesses(0);
        setGameOver(false);
        setWin(false);
    };

    return (
        <div className="hangman-game">
            <h1>Hangman Game</h1>
            <h2>{gameOver ? (win ? "You Win!" : "Game Over!") : "Guess the word!"}</h2>
            <div className="word">{renderWord()}</div>
            {!gameOver && (
                <div className="alphabet">
                    {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
                        <button
                            key={letter}
                            onClick={() => handleGuess(letter)}
                            disabled={guessedLetters.includes(letter)}
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            )}
            <div className="status">
                <p>Wrong guesses: {wrongGuesses}/{maxWrongGuesses}</p>
            </div>
            {gameOver && (
                <div>
                    <button onClick={restartGame}>Restart Game</button>
                </div>
            )}
        </div>
    );
};

export default Hangman;

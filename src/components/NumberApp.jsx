import React, { useState, useEffect } from "react";
import './NumberApp.css';
import { Link, Outlet } from "react-router-dom";

const NumberApp = () => {
    const [typedNumber, setTypedNumber] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [generatedNumber, setGeneratedNumber] = useState(() =>
        Math.floor(Math.random() * 100) + 1
    ); 

    const [alertMessage, setAlertMessage] = useState("");

    console.log(`Generated Number: ${generatedNumber}`);

    const playAgain= () =>{
        setTypedNumber('');
        setAttempts(0)
        setAlertMessage('')
        setGeneratedNumber(() =>Math.floor(Math.random() * 100) + 1)
    }

    const compare = () => {
        setAttempts(attempts + 1);

        if (typedNumber == generatedNumber) {
            setAlertMessage(`You won! The number was ${generatedNumber}`);
        } else if (Math.abs(typedNumber - generatedNumber) <= 5) {
            setAlertMessage(`You are too close!`);
        } else if (typedNumber > generatedNumber) {
            setAlertMessage(`Number is too High!`);
        } else {
            setAlertMessage(`Number is too Low!`);
        }
    };

    return (
        <>
        <div className="numberGame">
            <div className="appMain">
                <h1 className="numberHead">Guess the Number Game</h1>
                <p className="numberP">Guess a number between 1 and 100</p>
                <input
                    onChange={(e) => setTypedNumber(Number(e.target.value))}
                    type="number"
                    id="guess"
                    value={typedNumber}
                />
                <button className="numberBtn" id="check" disabled={!typedNumber} onClick={compare}>
                    Check
                </button>
                <p>{alertMessage}</p>
                <p>Attempts: {attempts}</p>
                <button onClick={playAgain}>Play Again</button>
            </div>
            <div className="Home">
               <Link to='/' className="Link"> <h4>Home</h4></Link>
            </div>
            </div>
            <Outlet/>
        </>
    );
};

export default NumberApp;

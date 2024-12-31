import React from "react";
import './Index.css';
import { Link, Outlet } from "react-router-dom";

const Index = () =>{
    return(
        <>
            <div className="indexMain">
                <h1 className="indexHead">Welcome to Game Corner</h1>
                <div className="indexContainer">
                    <h2>PLAY YOUR FAVORITE GAME!</h2>
                    <div className="gameBtns">
                        <Link className="Link" to='/Quiz'><div className="quizGame">QUIZ</div></Link>
                        <Link className="Link" to='/numberGame' > <div className="numbergame">GUESS THE NUMBER </div></Link>
                        <Link className="Link" to='/TTT' > <div className="numbergame">TIC TAC TOE </div></Link>
                        <Link className="Link" to='/Snake' > <div className="numbergame">SNAKE GAME </div></Link>
                        <Link className="Link" to='/Hman' > <div className="numbergame">HANG MAN </div></Link>
                        <Link className="Link" to='/AP' > <div className="numbergame">ADULT PICTIONARY </div></Link>
                        <Link className="Link" to='/TOD' > <div className="numbergame">TRUTH OR DARE </div></Link>
                        <Link className="Link" to='/NHIE' > <div className="numbergame">Never Have I Ever </div></Link>
                    </div>
                    </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Index
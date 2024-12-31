import React, { useState } from "react";
import "./ColorQuiz.css";
import { Link } from "react-router-dom";

const ColorQuiz = () => {
    const [selected,setSelected]=useState('')
    const [score,setScore] =useState(0)
    const [index,setIndex] = useState(0)
  const Questions = [
    {
      question: "What is the color of the sky on a sunny day?",
      options: ["Blue", "Red", "Green", "Yellow"],
      answer: "Blue",
    },
    {
      question: "Which Of Following is India capital?",
      options: ["Chennai", "Delhi", "Mumbai", "Kochi"],
      answer: "Delhi",
    },
    {
      question: "Which is Capital of Kerala?",
      options: ["Malappuram", "Palakkad", "Trivandrum", "Kochi"],
      answer: "Trivandrum",
    },
    {
      question: "What is the Capital of TN?",
      options: ["Salem", "Thirupathi", "Chennai", "Coimbatore"],
      answer: "Chennai",
    },
    {
      question: "Which color is in Indian flag",
      options: ["Black", "Red", "Green", "Yellow"],
      answer: "Green",
    },
  ];

  const handlesubmit = ()=>{
    if(selected == Questions[index].answer){
        setScore(score + 1)        
    }
    if(index < Questions.length - 1){
        setIndex(index+1)
    }else{
        alert(`Quiz Completed! your score is ${score}`)
    }
  }
  return (
    <>
      <div className="colorQuizMain">
        <h2>Quiz</h2>
        <div className="qstnBox">
          <h2>{Questions[index].question}</h2>
          <div className="btns">
            {Questions[index].options.map((item) => {
              return <button onClick={()=>setSelected(item)} style={{backgroundColor: selected == item ? "grey" : null}}>{item}</button>;
            })}
          </div>
          <div className="submitAns">
            <button disabled={!selected} onClick={handlesubmit} >Submit Answer</button>
          </div>
          <p>Question {index+1} of {Questions.length}</p>
          <h3>Your Score: {score}</h3>
        </div>
        <Link className="Link" to='/'><div className="quizHome"><h3>Home</h3></div></Link>
      </div>
    </>
  );
};

export default ColorQuiz;

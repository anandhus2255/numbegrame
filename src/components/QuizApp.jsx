import React, { useState } from 'react';

const QuizApp = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic', 'Indian', 'Southern', 'Pacific'],
      correctAnswer: 'Pacific',
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'George Orwell'],
      correctAnswer: 'William Shakespeare',
    },
  ];

  // State variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);

  // Handle answer selection
  const handleAnswerSelection = (answer) => {
    setUserAnswer(answer);
  };

  // Handle submitting the answer
  const handleSubmitAnswer = () => {
    if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert (` Quiz completed! Your final score is: ${score + 1}  `);
      setCurrentQuestionIndex(0);
      setScore(0);
    }

    // Clear the user's answer
    setUserAnswer('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Quiz App</h1>

      <div>
        <h2>{questions[currentQuestionIndex].question}</h2>
        <div>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              // key={index}
              onClick={() => handleAnswerSelection(option)}
              style={{
                backgroundColor: userAnswer === option ? 'lightblue' : 'white',
                margin: '5px',
                padding: '10px 20px',
                border: '1px solid #ccc',
                cursor: 'pointer',
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <br />
        <button onClick={handleSubmitAnswer} disabled={!userAnswer} style={{ padding: '10px 20px' }}>
          Submit Answer
        </button>
      </div>

      <div>
        <h3>Score: {score}</h3>
        <p>
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>
    </div>
  );
};

export default QuizApp;
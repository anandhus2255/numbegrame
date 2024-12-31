import React, { useState } from 'react';
import './TruthOrDare.css';
import { Link } from 'react-router-dom';

const truths = [
    'What’s the most awkward thing that’s ever happened to you in public?',
    'Have you ever had a crush on someone in this room?',
    'What’s the most rebellious thing you’ve ever done?',
    'If you could change one thing about yourself, what would it be?',
    'Have you ever had a secret relationship?',
    'What’s the most embarrassing thing you’ve done for a crush?',
    'Have you ever stolen something? What was it?',
    'What’s the one thing you’ve done that you regret the most?',
    'Who do you trust the most in this room?',
    'What’s something you’ve never told your parents?',
    'Have you ever lied to get out of trouble? What was the lie?',
    'What’s your biggest pet peeve?',
    'Have you ever ghosted someone? Why?',
    'What’s the worst date you’ve ever been on?',
    'What’s the strangest dream you’ve ever had?',
    'What’s the most embarrassing thing you’ve done in front of a group of people?',
    'Have you ever liked someone’s post just to get their attention?',
    'Have you ever pretended to be sick to avoid something?',
    'What’s a habit you’ve always wanted to break?',
    'What’s something that scares you but you would like to try?',
    'What’s a secret talent you have that no one knows about?',
    'Who in this room would you trust with your life?',
    'What’s the craziest thing you’ve done for a dare?',
    'What’s your biggest turn-off in a relationship?',
    'Who’s the first person you would call in an emergency?'
  ];
  
  const dares = [
    'Take a funny selfie and post it on social media.',
    'Speak in an accent (French, Spanish, etc.) for the next 5 minutes.',
    'Let someone else pick a random item for you to eat.',
    'Wear socks on your hands for the next round.',
    'Pretend to be a waiter and serve someone in the room for 5 minutes.',
    'Try to lick your elbow.',
    'Do your best impression of someone in the room.',
    'Pretend to be a character from your favorite TV show for the next 5 minutes.',
    'Call a friend and tell them a joke. If they don’t laugh, you lose.',
    'Do 10 jumping jacks.',
    'Try to juggle three items for 30 seconds.',
    'Let someone else give you a new hairstyle using a hair tie or clip.',
    'Post an embarrassing childhood photo on your social media.',
    'Do your best impression of a celebrity.',
    'Hold a plank position for 1 minute.',
    'Dance for 1 minute.',
    'Do 20 push-ups.',
    'Imitate an animal until your next turn.',
    'Post a funny photo on social media.',
    'Act out a scene from a movie for the group.',
    'Send a random emoji to someone you haven’t spoken to in a while.',
    'Sing a song from a movie musical.',
    'Do an impression of a famous singer for 1 minute.',
    'Let someone else draw something on your face with a marker.',
    'Take a drink of something without using your hands.',
    'Talk in a high-pitched voice until your next turn.'
  ];
  

const TruthOrDare = () => {
  const [currentOption, setCurrentOption] = useState('');
  const [isTruth, setIsTruth] = useState(true);

  const getRandomOption = () => {
    if (isTruth) {
      const randomTruth = truths[Math.floor(Math.random() * truths.length)];
      setCurrentOption(randomTruth);
    } else {
      const randomDare = dares[Math.floor(Math.random() * dares.length)];
      setCurrentOption(randomDare);
    }
  };

  const toggleTruthOrDare = () => {
    setIsTruth(!isTruth);
  };

  return (
    <div className="TODbody">
    <div className="game-container">
      <h1>Truth or Dare</h1>
      <div className="option-container">
        <h2>{isTruth ? 'Truth' : 'Dare'}</h2>
        <p>{currentOption}</p>
      </div>
      <button className="next-button" onClick={getRandomOption}>
        Next {isTruth ? 'Truth' : 'Dare'}
      </button>
      <button className="next-button" onClick={toggleTruthOrDare}>
        {isTruth ? 'Switch to Dare' : 'Switch to Truth'}
      </button>
    </div>
    <Link className='Link' to='/'><div className="TODHoMe"><h3>HOME</h3></div></Link>
    </div>
  );
};

export default TruthOrDare;

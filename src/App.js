import React from 'react'
import NumberApp from './components/NumberApp'
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import Index from './components/Index'
import ColorQuiz from './components/ColorQuiz'
import TicTacToe from './components/TicTacToe'
import SnakeGame from './components/SnakeGame'
import Hangman from './components/Hangman'
import AdultPictionary from './components/AdultPictionary'
import TruthOrDare from './components/TruthOrDare'
import NeverHaveIEver from './components/NeverHaveIEver '

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index/>}></Route>
          <Route path='numberGame' element={<NumberApp/>}></Route>
          <Route path='Quiz' element={<ColorQuiz/>}></Route>
          <Route path='TTT' element={<TicTacToe/>}></Route>
          <Route path='Snake' element={<SnakeGame/>}></Route>
          <Route path='Hman' element={<Hangman/>}></Route>
          <Route path='AP' element={<AdultPictionary/>}></Route>
          <Route path='TOD' element={<TruthOrDare/>}></Route>
          <Route path='NHIE' element={<NeverHaveIEver/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

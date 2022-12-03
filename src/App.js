import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hanger from './components/Hanger';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import { useState, useEffect } from 'react';
import { words } from './wordsData.jsx';
import { showNotification as show } from './helpers.jsx';
import { Notification } from './components/Notification';

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  let gameWord = words[Math.floor(Math.random() * words.length)];

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (gameWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            setShowNotification();
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setCorrectLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            setShowNotification();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [playable, correctLetters, wrongLetters, gameWord, showNotification]);

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Hanger />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word gameWord={gameWord} correctLetters={correctLetters} />
        <Notification />
      </div>
    </div>
  );
}

export default App;

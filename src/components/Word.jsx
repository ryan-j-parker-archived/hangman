import React from 'react';

export default function Word({ gameWord, correctLetters }) {
  return (
    <div className="word" id="word">
      {gameWord.split('').map((letter, i) => {
        return (
          <span key={i} className="letter">
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        );
      })}
    </div>
  );
}

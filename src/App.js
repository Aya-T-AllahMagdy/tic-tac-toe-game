import React, { useState,useEffect } from 'react';
import './App.css';
import Square from './components/square';

function App() {
  const initState=["","","","","","","","",""]
  const [gameState ,setGameState]= useState(initState)
  const [changeGame , setChangeGame]= useState(true)
 const onSquareClick=(index)=>{
let strings = Array.from(gameState)
console.log(strings,"tesr")

strings[index]  = changeGame? 'x':'o';
setGameState(strings);
setChangeGame(!changeGame)
console.log(strings[index],"dddddddddddddddd")
 }
 const clearGame = () => {
  setGameState(initState)
}
useEffect(() => {
  let winner = checkWinner();
  if (winner) {
      clearGame();
      alert(`Ta da ! ${winner} won the Game !`)
  }
}, [gameState])

const checkWinner = () => {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];
  console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          return gameState[a];
      }
  }
  return null;
}
  return (
    <div className="App">
    <h2>Tic Tac Teo game</h2>
    <div className="row jc-center">
                <Square className="b-bottom-right" onClick={() => onSquareClick(0)} state={gameState[0]}/>
                <Square className="b-bottom-right" onClick={() => onSquareClick(1)} state={gameState[1]}/>
                <Square className="b-bottom" onClick={() => onSquareClick(2)} state={gameState[2]}/>
            </div>
            <div className="row jc-center">
                <Square className="b-bottom-right" onClick={() => onSquareClick(3)} state={gameState[3]}/>
                <Square className="b-bottom-right" onClick={() => onSquareClick(4)} state={gameState[4]}/>
                <Square className="b-bottom" onClick={() => onSquareClick(5)} state={gameState[5]}/>
            </div>
            <div className="row jc-center">
                <Square className="b-right" onClick={() => onSquareClick(6)} state={gameState[6]}/>
                <Square className="b-right" onClick={() => onSquareClick(7)} state={gameState[7]}/>
                <Square onClick={() => onSquareClick(8)} state={gameState[8]}/>
            </div>
            <button className="clear-button" onClick={clearGame}>Clear Game</button>
            <p className="fc-aqua fw-600">The Indian Dev</p>
        </div>
  );
}

export default App;

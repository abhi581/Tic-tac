import './App.css'
import { useState } from 'react';
import Match from './matches';
import Navbar from './navbar'

let flag = 0;

export default function Board() {

  let [squares, setSquares] = useState(Array(9).fill(null));
    let [oWin, setOwin] = useState(0);
    let [xWin, setXwin] = useState(0);
    let [totalMatch, setMatch] = useState(0);

  function onCilcked(i) {
    if (squares[i] || gameLogic(squares)) {
      return;
    }

    const newSquares = squares.slice();

    if(flag === 0) {
      newSquares[i] = 'X';
      setSquares(newSquares);
      flag = 1;
    }
    else {
      newSquares[i] = 'O';
      setSquares(newSquares);
      flag = 0;
    }
  } 

  function reset() {
    setSquares(Array(9).fill(null));
    setMatch(() => (totalMatch + 1))
    if(winner === 'O')  setOwin(oWin+1);
    if(winner === 'X')  setXwin(xWin+1);
  }
   
  let winner = gameLogic(squares);
  let player;
  if (winner)
    player = "Winner :" + winner;
  else
    player = "player :" + (flag === 0 ? "X" : "O");

  return (
    <>
      <Navbar
          squares={squares}
          length={squares.filter((square) => square === "O").length}
          symbol={"O"}
        />
      <div className='board'>
        <div>
          <p>{player}</p>
          {winner ? <button onClick={reset}>Restart</button>: null}
        </div>
        <div className="row">
          <Square value={squares[0]} onCilcked={() => onCilcked(0)} />
          <Square value={squares[1]} onCilcked={() => onCilcked(1)} />
          <Square value={squares[2]} onCilcked={() => onCilcked(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onCilcked={() => onCilcked(3)} />
          <Square value={squares[4]} onCilcked={() => onCilcked(4)} />
          <Square value={squares[5]} onCilcked={() => onCilcked(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onCilcked={() => onCilcked(6)} />
          <Square value={squares[7]} onCilcked={() => onCilcked(7)} />
          <Square value={squares[8]} onCilcked={() => onCilcked(8)} />
        </div>
      </div>
      <Match O={oWin} X={xWin} total={totalMatch}/>
      <Navbar
          length={squares.filter((square) => square === "X").length}
          symbol={"X"}
      />
    </>
  )
}

function Square({ value, onCilcked }) {
  return <button className='square' onClick={onCilcked}>{value}</button>
}

function gameLogic(squares) {
  const winnerset = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winnerset.length; i++) {
    const [a, b, c] = winnerset[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    }
    return null;
  }

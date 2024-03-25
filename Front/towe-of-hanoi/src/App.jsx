import React, { useState } from 'react';
import { TowerDisplay } from './components/TowerDisplay';
import { HeaderInfo } from './components/HeaderInfo'; 
import { PuzzleSolve } from './components/SolvePuzzle';
import { HanoiRules } from './components/HanoiRules';
import { TRY_BOARD, DEFAULT_BOARD, BOARD_4, SOLVE_BOARD } from './constants/constants';


function App() {

const [towers, setTower] = useState(DEFAULT_BOARD)

const handleClick =(tower) =>{
  setTower(SOLVE_BOARD)
}
console.log

  return (
    
    <main className="main">
      <HeaderInfo/>
      <h1>Torres de Hanoi</h1>
      
      <div className="solve-section">

      <button  onClick={handleClick} >Resolver</button>
    
      <select name="select"  value={DEFAULT_BOARD} 
      
        onChange={e =>setTower( BOARD_4) }>
      

      <option value={DEFAULT_BOARD}selected>3</option>
      <option value={BOARD_4} >4</option>
      <option value={TRY_BOARD}>5</option>
      </select>

      </div>

      <div className="board-display">

      <div className="towers">
          
      {Object.keys(towers).map((tower, index) => (
        <div key={index} className="tower">
          {towers[tower].map((disk, idx) => (
            <div key={idx} className={`disk disk${disk}`} style={{ width: `${20 + disk * 10}px`, backgroundColor: `rgb(${disk * 20}, ${disk * 30}, ${disk * 10})` }}>{disk}</div>
          ))}
        </div>
      ))}

      </div>
          
      <HanoiRules/>

      </div>

    </main>
  );
}

export default App;
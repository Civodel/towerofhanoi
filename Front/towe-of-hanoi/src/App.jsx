
import React, { useState, useEffect } from 'react';
import { HeaderInfo } from './components/HeaderInfo'; 
import { HanoiRules } from './components/HanoiRules';
import { TowerDisplay } from './components/TowerDisplay';
import { DEFAULT_BOARD,DISKS_IN_TOWER } from './constants/constants';
import api from '../backend/backend';

function SelectDiscs({ onChange }) {
  return (
    <div className='solve-select'>
      <h4>Select Number of Disks:</h4>
      
          <select className='select-classic' name="select" onChange={onChange} id='select-element'>
      {DISKS_IN_TOWER.map(value => (
        <option key={value} value={value}>{value}</option>
      ))}
    </select>
    </div>
  );
}

function App() {
  const [towers, setTowers] = useState(DEFAULT_BOARD);
  const [selectValue, setSelectValue] = useState(3);
  const [moves, setMoves] =useState()
  const [movementHistory, setMovementHistory] = useState([]);

  useEffect(() => {
    fetchTowers(selectValue);
  }, [selectValue]);

  const fetchTowers = async (value) => {
    try {
      const towersData = await api.get(`/towers/create/${value}`);
      setTowers(towersData.data);
    } catch (error) {
      console.error('Error fetching towers: ', error);
    }
  };

  const handleClick = async () => {
    
    try {
      const movementData = await api.get(`/solution/moves/${selectValue}`);


      if (movementData && movementData.data) {
        const newMovementHistory = []; 
        const movePromises = movementData.data.map((movement, index) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              setMoves(movement);
              newMovementHistory.push(movement); 
              setMovementHistory([...newMovementHistory]); 
              resolve();
            }, index * 1500);
          });
        });
      } 

      const solutionData = await api.post(`/solution/${selectValue}`, towers);
      console.log(solutionData.data);

      solutionData.data.forEach((tower, index) => {
        setTimeout(() => {
          setTowers(tower);
        }, index * 1500);
      });
    } catch (error) {
      console.error('Error fetching solution: ', error);
    }
  };

  return (
    <main className="main">
      <HeaderInfo />
      <h1>Tower Of Hanoi</h1>
      <HanoiRules />
      <div className="solve-section">
   
        <SelectDiscs onChange={(e) => setSelectValue(parseInt(e.target.value))} />
        <button className='resolve-button' onClick={handleClick}>Solution</button>
      </div>
      
      <div className="board-display">
        <div className="towers">
        {Object.keys(towers).map((tower, index) => (
  <div key={index} className="tower">
    {towers[tower].slice().sort((a, b) => b - a).reverse().map((disk, idx) => (
      <div key={idx} className={`disk disk${disk}`} style={{ width: `${150+ (disk+5) * 10}px`, backgroundColor: `rgb(${disk * 10}, ${disk * 20}, ${disk * 60})` }}>{disk}</div>
    ))}
  </div>
))}
        </div>
       
      </div>
      <div className='moves-container'>
      <h2>Historial de movimientos:</h2>
      <div className='moves-display'><div>

  <ul>
    {movementHistory.map((movement, index) => (
      <li key={index}>{movement}</li>
    ))}
  </ul>
</div>
  </div>
      </div>
    </main>
  );
}

export default App; 
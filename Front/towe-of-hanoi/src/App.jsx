
import React, { useState, useEffect } from 'react';
import { HeaderInfo } from './components/HeaderInfo'; 
import { HanoiRules } from './components/HanoiRules';
import { TowerDisplay } from './components/TowerDisplay';
import { DEFAULT_BOARD,DISKS_IN_TOWER } from './constants/constants';
import api from '../backend/backend';

function SelectDiscs({ onChange }) {
  {/*Colocar estilos en el boton similar al select*/}
  return (
    <div className='solve-select'>
      <h4>Numero de Discos</h4>
      
          <select className='classic' name="select" onChange={onChange} id='select-element'>
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
      const movementData =await api.get(`/solution/moves/${selectValue}`)
      console.log(movementData.data)

      const movePromises =movementData.data.map((movement,index) =>{
        return new Promise((resolve)=>{
          setTimeout(()=>{
            setMoves(movement);
            resolve();
          },index *2000)
        });
      });


      const solutionData = await api.post(`/solution/${selectValue}`, towers);
      console.log(solutionData.data);

      solutionData.data.forEach((tower, index) => {
        setTimeout(() => {
          setTowers(tower);
        }, index * 2000);
      });
    } catch (error) {
      console.error('Error fetching solution: ', error);
    }
  };

  return (
    <main className="main">
      <HeaderInfo />
      <h1>Torres de Hanoi</h1>
      <HanoiRules />
      <div className="solve-section">
   
        <SelectDiscs onChange={(e) => setSelectValue(parseInt(e.target.value))} />
        <button className='resolve-button' onClick={handleClick}>Resolver</button>
      </div>
      
      <div className="board-display">
        <div className="towers">
        {Object.keys(towers).map((tower, index) => (
  <div key={index} className="tower">
    {towers[tower].slice().sort((a, b) => b - a).reverse().map((disk, idx) => (
      <div key={idx} className={`disk disk${disk}`} style={{ width: `${20 + disk * 10}px`, backgroundColor: `rgb(${disk * 10}, ${disk * 20}, ${disk * 60})` }}>{disk}</div>
    ))}
  </div>
))}
        </div>
       
      </div>
      
      <div>Moves:  {moves}  </div>
    </main>
  );
}

export default App; 
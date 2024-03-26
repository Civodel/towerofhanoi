

import React, { useState,useEffect } from 'react';
import { TowerDisplay } from './components/TowerDisplay';
import { HeaderInfo } from './components/HeaderInfo'; 
import { PuzzleSolve } from './components/SolvePuzzle';
import { HanoiRules } from './components/HanoiRules';
import { TRY_BOARD, DEFAULT_BOARD, BOARD_4, SOLVE_BOARD,BODY_POST } from './constants/constants';
import api from '../backend/backend';


function SelectDiscs({ onChange }) {
  return (
    <select name="select" onChange={onChange} id='select-element'>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>
  );
}


function App() {

const [towers, setTower] = useState(DEFAULT_BOARD)
const [moves,setMove]=useState('Move disk 1 de A to B')
const [click, setClick]=useState(1)
const [selectValue, setSelectedValue] =useState(3)

const handleClick = async () => {
  try {
    const solutionData = await api.post('/solution/'+selectValue,towers);
    console.log(solutionData.data);

    const promises = solutionData.data.map((tower, index) => {
      
      return new Promise((resolve) => {
        setTimeout(() => {
          setTower(tower); 
          resolve(); 
        }, index * 2000); 
      });
    });

    
    await Promise.all(promises);

  } catch (error) {
    console.error('Error respuestas: ', error);
  }
};

const handleSelectChange = (e) => {


  const selectedValue = e.target.value;

  const fetchTowers = async (selectedValue) => {

    try {
      
      const towersData = await api.get('/towers/create/'+selectedValue);
      setTower(towersData.data)
    } catch (error) {
      console.error('Error culiao: ', error);
    }
  };
  console.log("llamao")

  setSelectedValue(selectedValue)
  fetchTowers(selectedValue);
  
};

useEffect(() => {
  const fetchTowers = async () => {

    try {
      
      const towersData = await api.get('/towers/create/');
      console.log(towersData.data)
      console.log(DEFAULT_BOARD)
      setTower(towersData.data)
    } catch (error) {
      console.error('Error culiao: ', error);
    }
  };
},[SelectDiscs]);


useEffect(() => {
  const fetchSolution = async () => {

    try {
      
      const solutionData = await api.get('/solution/3');
      console.log(solutionData.data)
      
    } catch (error) {
      console.error('Error culiao: ', error);
    }
  };
},[handleClick]);


  return (
    
    <main className="main">
      <HeaderInfo/>
      <h1>Torres de Hanoi</h1>
      
      <div className="solve-section">

      <button  onClick={handleClick} >Resolver</button>
      <SelectDiscs onChange={handleSelectChange} />

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
        
        <HanoiRules />
      </div>
      <div>movimientos {moves}</div>
    

    </main>
  );
}

export default App;





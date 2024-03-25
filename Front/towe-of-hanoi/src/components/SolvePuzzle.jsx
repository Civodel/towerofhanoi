import { TRY_BOARD } from "../constants/constants"
import { HanoiTowersBoard } from "./HanoiTowersBoard"
import React, { useState } from 'react';
import { DEFAULT_BOARD } from "../constants/constants";


export function PuzzleSolve ({}) {

    const [towers, setTowers] = useState(DEFAULT_BOARD);


    
    const handleClick = () => {

        setTowers(towers)
      }
    

    return (
<div className="solve-section">

    <button  onClick={handleClick}  >Resolver</button>
    
<select name="select">
  <option value="value1"selected>3</option>
  <option value="value2" >4</option>
  <option value="value3">5</option>
</select>

</div>
      
    )
  }
  
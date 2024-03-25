import React, { useState } from 'react';
 import { DEFAULT_BOARD, TRY_BOARD } from '../constants/constants';
 import { PuzzleSolve } from './SolvePuzzle';

export function HanoiTowersBoard (towers) {

    return (
<div className="towers">

        

        {Object.keys(towers).map((tower) => (
          <div key={tower} className="tower">
            {towers[tower].map((disk) => (
              <div key={disk} className={`disk disk${disk}`}>{disk}</div>
            ))}
           

          </div>

        ))}
      </div>

    )
  }
  
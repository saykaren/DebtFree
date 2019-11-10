import React, { useState } from 'react';
import './App.css';

const ResultArrayReturn = ({specificClassName, arrayToMap, symbol})=>{
    return(
      <div className={specificClassName}>
      {arrayToMap.map((col, index)=>(
        <div
          className="list"
          key={index}
        >
          {symbol}{col}  
          </div>
      ))}
    </div>
    )
  };

  export default ResultArrayReturn;
import React, { useState } from 'react';

import './../../stylesheet/App.scss';

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
import React, { useState } from 'react';
import './App.css';
import FormDiv from './App.js';
import ResultArrayReturn from './forms/ResultArrayReturn';


const HypotheticalAnalysis = ({extraPayment, extraPrincipalPaidArray, extraInterestPaidArray, monthDate, principal}) =>{
    console.log({extraInterestPaidArray});
    if(extraPayment!== undefined) {
        return(
            <div className="interestPaid, resultsBoxes">
                {extraInterestPaidArray.map((col, index)=>(
                    <div
                        className="list"
                        key={index}
                    >
                    ${col}  
                    </div>
                ))}
            </div>
         );
    };

    return(
        <div>
            You should really put an extra payment in to reduce your principal.
        </div>
    )
   
};

export default HypotheticalAnalysis;
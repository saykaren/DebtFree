import React, { useState } from 'react';
import './App.css';
import FormDiv from './App.js';
import ResultArrayReturn from './App.js';


// FormDiv = ({title, value, changeParameter, type});

const HypotheticalAnalysis = ({extraPayment, extraPrincipalPaidArray, extraInterestPaidArray, monthDate, principal}) =>{

    if(extraPayment === undefined) {
        return(
            <div>
                {/* <ResultArrayReturn specificClassName="interestPaid, resultsBoxes" arrayToMap={extraInterestPaidArray}/> */}
            </div>
        );
    }

    return(
        <div>
            {extraPayment}
        </div>
    )
   
};

export default HypotheticalAnalysis;
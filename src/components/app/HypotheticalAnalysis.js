import React, { useState } from 'react';
import './App.css';
import FormDiv from './App.js';
import ResultArrayReturn from './forms/ResultArrayReturn';


const makeMeAMapDiv = ({littleDivClassName, array})=>{
    return(
        <div className="interestPaid, resultsBoxes">     
            {array.map((col, index)=>(
                <div
                    className={littleDivClassName}
                    key={index}
                >
                ${col}  
                </div>
            ))}
        </div>
    )
};

const HypotheticalAnalysis = ({extraPayment, extraPrincipalPaidArray, extraInterestPaidArray, monthDate, principal, extraNewEndingPrincipalArray}) =>{
    console.log({extraInterestPaidArray});
    if(extraPayment!== undefined) {
        return(
            <section className='extraResult'>
                <div className="interestPaid, resultsBoxes">
                    
                    {extraPrincipalPaidArray.map((col, index)=>(
                        <div
                            className="list extraList"
                            key={index}
                        >
                        ${col}  
                        </div>
                    ))}
                </div>
                <div className="interestPaid, resultsBoxes">
                    
                    {extraInterestPaidArray.map((col, index)=>(
                        <div
                            className="list extraList"
                            key={index}
                        >
                        ${col}  
                        </div>
                    ))}
                </div>
                <div className="interestPaid, resultsBoxes">
                    
                    {extraNewEndingPrincipalArray
                        .filter(x=>(x !==principal))
                        .map((col, index)=>(
                            <div
                                className="list extraList"
                                key={index}
                            >
                                ${col}  
                            </div>
                    ))}
                </div>
            </section>

            );
    };

    return(
        <div>
            You should really put an extra payment in to reduce your principal.
        </div>
    )
   
};

export default HypotheticalAnalysis;
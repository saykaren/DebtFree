import React, { useState } from 'react';
import './../stylesheet/App.scss';
import numberConverter from './App';
import PieChart from 'react-minimal-pie-chart';
import sumItUp from './InterestPayments';

const sumThemUp = (array) =>{
    return Math.round(array.reduce((acc, num)=> acc+num, 0));
};

const Completion = ({interestPaidArray, monthArray, principal} )=>{
    // console.log({interestPaidArray});
    let lengthMonths = monthArray.length;
    // console.log({lengthMonths});
    // console.log({principal});
 
    let lastMonth = monthArray[monthArray.length-1];
    if(interestPaidArray.length>0){
        let bankGotThisMuch = sumThemUp(interestPaidArray)+principal;
        return(
            <div className='completion'>
                <h2>{lastMonth} is when you paided off your loan! Whoohoo!</h2>
                <section>
                    You paid the bank ${bankGotThisMuch} to borrow {principal}
                </section>        
            </div>
        )
    }
         return(
            <div className="hidden">Still Calculating....</div>
        )
   
};

export default Completion;


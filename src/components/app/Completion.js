import React, { useState } from 'react';
import './App.css';
import numberConverter from './App';
import PieChart from 'react-minimal-pie-chart';
import sumItUp from './InterestPayments';

const Completion = ({interestArray, monthArray, principal} )=>{
    // console.log({interestArray});
    // if(interestArray !== undefined){
    //     let lengthMonths = monthArray.length;
    //     let lastMonth = monthArray[monthArray.length-1];
    //     let bankGotThisMuch = sumItUp(interestArray);
    //     return(
    //         <div>{principal}
    //         Last month is {lastMonth}
    //         You paid the bank this much
    
    //         </div>
    //     )
    // }else{
        return(
            <div>whoops</div>
        )
    // }
    
};

export default Completion;


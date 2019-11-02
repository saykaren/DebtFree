import React, { useState } from 'react';
import './App.css';
import numberConverter from './App';

const InterestPayments = ({interestPaid}) =>{
    console.log({interestPaid});
    let totalInterest = interestPaid.reduce((acc, num)=> acc+num, 0);

    return(
        <div>
            Total Interest Paid Over Loan: $
            {totalInterest}
        </div>
    )
}

export default InterestPayments;
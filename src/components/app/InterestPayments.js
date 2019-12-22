import React, { useState } from 'react';
import './../stylesheet/App.scss';
import numberConverter from './App';
import PieChart from 'react-minimal-pie-chart';
 
export const sumItUp = (array) =>{
    return Math.round(array.reduce((acc, num)=> acc+num, 0));
}

const InterestPayments = ({interestPaid, principal, principalPaid}) =>{
    let totalInterest = sumItUp(interestPaid);
    let totalPrincipal = sumItUp(principalPaid);
    let amountOfMonths = interestPaid.length;
    // console.log(principal);

    return(
        <div className={totalInterest===0 ? 'hidden' : "reportResults"}>
            Total Interest Paid Over Loan: $
            {totalInterest}
            <div >
                Total Principal Paid: $
                {totalPrincipal}
            </div>
            <div >
                Amount of Months: 
                {amountOfMonths}
            </div>
            <div id="container">
            {/* <PieChart
                animate
                animationDuration={500}
                animationEasing="ease-out"
                cx={50}
                cy={50}
                data={[
                    {
                    color: '#E38627',
                    title: 'One',
                    value: totalInterest
                    },
                    {
                    color: '#C13C37',
                    title: 'Two',
                    value: totalPrincipal
                    },
  
                ]}
                label
                labelPosition={60}
                labelStyle={{
                    fontFamily: 'sans-serif',
                    fontSize: '5px'
                }}
                lengthAngle={360}
                lineWidth={20}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={18}
                radius={50}
                ratio={1}
                rounded
                startAngle={0}
            /> */}
            </div>
        </div>
    )
}

export default InterestPayments;
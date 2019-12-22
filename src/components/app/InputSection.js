import React, { useState } from 'react';
import './../stylesheet/App.scss';
import FormDiv from './forms/FormDiv';

const InputSection = ({principal, setPrincipal,interestRate, setInterestRate, monthlyPayment, setMonthlyPayment,extraPayment, setExtraPayment, monthArray})=>{
  //User Input 
//   const [principal, setPrincipal] = useState(10000);
//   const [interestRate, setInterestRate] = useState(3.125);
//   const [monthlyPayment, setMonthlyPayment] = useState(847.50);
//   const [extraPayment, setExtraPayment] = useState(100);



    return(
        <section id="topInput">

          <form className="inputGroup">
            <select className="inputBox">
              Month Start Date
              {monthArray.map((col, index)=>(
                <option value={col} key={index}>
                  {col}
                </option>
              ))}
            </select>
        </form>
        <FormDiv
          title="Loan/Mortgage Amount Second Column"
          value={principal}
          changeParameter={setPrincipal}
          type="number"
        />       
        <FormDiv
          title="Interest Rate"
          value={interestRate}
          changeParameter={setInterestRate}
          type="number"
        />
        <FormDiv
          title="Set Monthly Payment"
          value={monthlyPayment}
          changeParameter={setMonthlyPayment}
          type="number"
        />
        <FormDiv
          title="Extra payment to monthly amount"
          value={extraPayment}
          changeParameter={setExtraPayment}
          type="number"
        />



      </section>
    )
};

export default InputSection;
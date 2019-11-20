import React, { useState } from 'react';
import './App.css';
import FormDiv from './forms/FormDiv';

const InputSection = ({principal, setPrincipal,interestRate, setInterestRate, monthlyPayment, setMonthlyPayment,extraPayment, setExtraPayment })=>{
  //User Input 
//   const [principal, setPrincipal] = useState(10000);
//   const [interestRate, setInterestRate] = useState(3.125);
//   const [monthlyPayment, setMonthlyPayment] = useState(847.50);
//   const [extraPayment, setExtraPayment] = useState(100);



    return(
        <section id="topInput">
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
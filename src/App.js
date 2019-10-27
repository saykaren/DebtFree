import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const FormDiv = ({title, value, changeParameter, type})=>{
  return(
    <form className="inputGroup">
      <label className="inputBox">
        {title}
        <input 
          type={type}
          value={value}
          onChange={e=>changeParameter(e.target.value)}
        />
      </label>
    </form>
  )
}


function App() {

  const [principal, setPrincipal] = useState(172000);
  const [interestRate, setInterestRate] = useState(3.75);
  const [monthlyPayment, setMonthlyPayment] = useState(800);
  const [extraPayment, setExtraPayment] = useState();

  const [result, setResult] = useState([]);
 

  const AmortizationSchedule = () =>{
    let scheduleArray = [];
    let scheduleObject = {};
    const initialPrinipal = principal;
    let newPrincipal = principal;
    const setMonthly = monthlyPayment;
    const interestSchedule = (interestRate*.01)/12;
    let monthDate = 1;

    let paymentInterest = newPrincipal*interestSchedule;
    let principalPaid = setMonthly-paymentInterest;
    console.log({principalPaid});
    let balance = newPrincipal - principalPaid;
    let newPrincipalPaid = balance;
    console.log(paymentInterest);
    scheduleArray.push(1, monthlyPayment, principalPaid, paymentInterest, balance);
    scheduleObject.results = [{
      "names" : ["Month", "Monthly Payment", "Principal Paid", "Interest You Paid", "Updated Principal"],
      1 : [monthlyPayment, principalPaid, paymentInterest, balance], 
    }];

    setResult(scheduleArray);
    console.log({scheduleArray});
  
  };

  return (
    <div className="App">
      <header className="App-header">
        Give no other option not to change!
      </header>
      <main>
        <FormDiv
          title="Loan/Mortgage Amount"
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
        <button onClick={AmortizationSchedule}>submit</button>
      </main>
      <section >
        <h2>Amortization schedule</h2>
        <div id="amortizationResults">
        {/* {scheduleObject.results.names.map((x, index)=>(
          <div
            className="list"
            key={index}
          />
          {x}
          <div>
        ))} */}


        {result.map((col, index)=>(
          <div
            className="list"
            key={index}
          >
            {col}  
            </div>
        ))}
        </div>
      </section>

    </div>
  );
}

export default App;

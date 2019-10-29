import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { end } from 'worker-farm';

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
  const [endingPrincipal, setEndingPrincipal] = useState();

  const [result, setResult] = useState([]);
 
  let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let principalPaidArray = [];
  let interestPaidArray = [];
  let newEndingPrincipalArray = []; 

  const clickMe = () =>{
    console.log('click');
  }

  const generateCalculation = (endingPrincipal) =>{
    if(endingPrincipal>0){
      console.log("here");
      console.log({endingPrincipal });
      let paymentInterestPaid = endingPrincipal*((interestRate*.01)/12);
      let principalPaid = monthlyPayment-paymentInterestPaid;
      let balance = endingPrincipal-principalPaid;

      principalPaidArray.push(principalPaid);
      interestPaidArray.push(paymentInterestPaid);
      newEndingPrincipalArray.push(balance);
      setEndingPrincipal(balance);

      console.log({principalPaidArray, interestPaidArray, newEndingPrincipalArray});
      console.log(endingPrincipal);
      // if(endingPrincipal>0){
      //   generateCalculation();
      // }
    }else{
      return
    }
  }

  const AmortizationSchedule = () =>{
    let scheduleArray = [];
    let scheduleObject = {};

    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let principalPaidArray = [];
    let interestPaidArray = [];
    let newEndingPrincipalArray = []; 

    const initialPrinipal = principal;
    let newPrincipal = principal;
    const setMonthly = monthlyPayment;
    const interestSchedule = (interestRate*.01)/12;
   
    let paymentInterestPaid = newPrincipal*interestSchedule;
    let principalPaid = setMonthly-paymentInterestPaid;
    // console.log({principalPaid});
    let balance = newPrincipal - principalPaid;
    let newPrincipalPaid = balance;

    ///push into arrays
    principalPaidArray.push(principalPaid);
    interestPaidArray.push(paymentInterestPaid);
    newEndingPrincipalArray.push(balance);
    setEndingPrincipal(balance);

    

    
    
    

    // scheduleArray.push(1, monthlyPayment, principalPaid, paymentInterestPaid, balance);
    // scheduleObject.results = [{
    //   "names" : ["Month", "Monthly Payment", "Principal Paid", "Interest You Paid", "Updated Principal"],
    //   1 : [monthlyPayment, principalPaid, paymentInterestPaid, balance], 
    // }];

    // setResult(scheduleArray);
    // console.log({scheduleArray});
    

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
        <button onClick={generateCalculation}>Click me</button> {endingPrincipal}
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

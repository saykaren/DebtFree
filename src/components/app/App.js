import React, { useState } from 'react';
import './App.css';
import InterestPayments from './InterestPayments';
import Completion from './Completion';
import HypotheticalAnalysis from './HypotheticalAnalysis';

///Dates
let todayDate = new Date();
let monthToday = todayDate.getMonth();
let yearToday = todayDate.getFullYear();


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

export const numberConverter =(value) =>{
  return parseFloat((value).toFixed(2));
}

const titleInfo = ["Date", "Principal Paid", "Interest Paid", "Ending Principal"];


function App() {
  let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let yearArray = [2020];

  //User Input 
  const [principal, setPrincipal] = useState(10000);
  const [interestRate, setInterestRate] = useState(3.125);
  const [monthlyPayment, setMonthlyPayment] = useState(847.50);
    
  //Extra payment 
  const [extraPayment, setExtraPayment] = useState();
  const [extraPrincipalPaidArray, setExtraPrincipalPaidArray] = useState([]);
  const [extraInterestPaidArray, setExtraInterestPaidArray] = useState([]);
  const [extraNewEndingPrincipalArray, setExtraNewEndingPrincipalArray] = useState([principal]);


  //Update Input
  const [principalPaidArray, setPrincipalPaidArray] = useState([]);
  const [interestPaidArray, setInterestPaidArray] = useState([]);
  const [newEndingPrincipalArray, setNewEndingPrincipalArray] = useState([principal]);
  const [monthDate, setMonthDate] = useState([]);

 
  const generateCalculation = () =>{
    // console.log({currentPrincipal});
    let currentPrincipal = newEndingPrincipalArray[newEndingPrincipalArray.length-1];

    if(currentPrincipal>monthlyPayment){
      let paymentInterestPaid = numberConverter((currentPrincipal*((interestRate*.01)/12)));
      let principalPaid = numberConverter(monthlyPayment-paymentInterestPaid)
      let balance = numberConverter(currentPrincipal-principalPaid);


      setPrincipalPaidArray([...principalPaidArray, principalPaid]);
      setInterestPaidArray([...interestPaidArray, paymentInterestPaid]);
      setNewEndingPrincipalArray([...newEndingPrincipalArray, balance]);

      let monthDateIndex = (monthDate.length)-(Math.floor(monthDate.length/12)*12);
      setMonthDate([...monthDate, monthArray[monthDateIndex]]);

    }
    //extra payment calculations
    let extraCurrentPrincipal = extraNewEndingPrincipalArray[extraNewEndingPrincipalArray.length-1];
    let extraMonthlyPaymentCal = monthlyPayment+extraPayment;
    if(extraCurrentPrincipal>monthlyPayment+extraPayment){
      let extraPaymentInterestPaid = numberConverter((extraCurrentPrincipal*((interestRate*.01)/12)));
      let extraPrincipalPaid = numberConverter(extraMonthlyPaymentCal-extraPaymentInterestPaid)
      let extraBalance = numberConverter(extraCurrentPrincipal-extraPrincipalPaid);

      setExtraPrincipalPaidArray([...extraPrincipalPaidArray, extraPrincipalPaid]);
      setExtraInterestPaidArray([...extraInterestPaidArray, extraPaymentInterestPaid]);


      setExtraNewEndingPrincipalArray([...extraNewEndingPrincipalArray, extraBalance]);

      // let monthDateIndex = (monthDate.length)-(Math.floor(monthDate.length/12)*12);
      // setMonthDate([...monthDate, monthArray[monthDateIndex]]);
      

    }

  }

  
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

      </main>
      <section className="results">
        <section id="AmortizationSchedule">
          <h2>Amortization schedule</h2>

          <button onClick={()=>generateCalculation()}>Calculate</button>
          <div className="titleGroup">
            {titleInfo.map((col, index)=>(
            <div className="title"
              key={index}
              >
              {col}
              </div>
            ))}
          </div>
          <div id="amortizationResults">


            <div className="month, resultsBoxes">
              {monthDate.map((col, index)=>(
                <div
                  className="list"
                  key={index}
                >
                  {col}  
                  </div>
              ))}
            </div>
            <div className="prinipalPaid, resultsBoxes">
              {principalPaidArray.map((col, index)=>(
                <div
                  className="list"
                  key={index}
                >
                  ${col}  
                  </div>
              ))}
            </div>
            <div className="interestPaid, resultsBoxes">
              {interestPaidArray.map((col, index)=>(
                <div
                  className="list"
                  key={index}
                >
                  ${col}  
                  </div>
              ))}
            </div>
            <div className="updatedPrincipal, resultsBoxes">
              {newEndingPrincipalArray
              .filter(x=>(x !==principal))
              .map((col, index)=>(
                <div
                  className="list"
                  key={index}
                >
                  ${col}  
                  </div>
              ))}
            </div>
          </div>
        </section>
        <section className="evaluate">
          <HypotheticalAnalysis principal={principal} interestPaidArray={interestPaidArray} extraPayment={extraPayment} />
          <InterestPayments interestPaid={interestPaidArray} principal={principal} principalPaid={principalPaidArray}/>   
          <Completion interestArray={interestPaidArray} monthArray={monthDate} principal={principal}/>
        </section>    
      </section>
    </div>
    
  );
}

export default App;


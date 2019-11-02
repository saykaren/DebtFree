import React, { useState } from 'react';
import './App.css';
import InterestPayments from './InterestPayments';

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

  //User Input 
  const [principal, setPrincipal] = useState(172000);
  const [interestRate, setInterestRate] = useState(3.75);
  const [monthlyPayment, setMonthlyPayment] = useState(800);
  const [extraPayment, setExtraPayment] = useState();
  const [endingPrincipal, setEndingPrincipal] = useState(principal);

  let todayDate = new Date();
  let startMonth = todayDate.getMonth();

  //Update Input
  const [principalPaidArray, setPrincipalPaidArray] = useState([]);
  const [interestPaidArray, setInterestPaidArray] = useState([]);
  const [newEndingPrincipalArray, setNewEndingPrincipalArray] = useState([]);
  const [monthDate, setMonthDate] = useState([]);

  console.log({endingPrincipal});
  
 
 
  const generateCalculation = (currentPrincipal) =>{
    // console.log({currentPrincipal});
    if(currentPrincipal>0){
      let paymentInterestPaid = numberConverter((currentPrincipal*((interestRate*.01)/12)));
      let principalPaid = numberConverter(monthlyPayment-paymentInterestPaid)
      let balance = numberConverter(currentPrincipal-principalPaid);

      setPrincipalPaidArray([...principalPaidArray, principalPaid]);
      setInterestPaidArray([...interestPaidArray, paymentInterestPaid]);
      setNewEndingPrincipalArray([...newEndingPrincipalArray, balance]);
      // setMonthDate([...monthDate, monthArray[monthDate.length]]);

      // let monthDateIndex = (monthDate.length%12 ===0 && monthDate.length > 2) ? 12 : (monthDate.length)-(Math.floor(monthDate.length/12)*12);
      let monthDateIndex = (monthDate.length)-(Math.floor(monthDate.length/12)*12);
      setMonthDate([...monthDate, monthArray[monthDateIndex]]);

      console.log({monthDateIndex});
      // setMonthDate([...monthDate, monthArray[monthDate.length]]);
      // (monthDate[monthDate.length-1] > 12) ? setMonthDate([...monthDate, 1]) : setMonthDate([...monthDate, monthDate[monthDate.length-1]+1]);
      // console.log({newEndingPrincipalArray});

      // console.log({balance});
      setEndingPrincipal(balance);
      if(endingPrincipal.length > monthDate.length){
        setMonthDate([...monthDate, "Hola"]);        
      }

      // console.log({principalPaidArray, interestPaidArray, newEndingPrincipalArray});
    }else{
      return
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
        {/* <button onClick={AmortizationSchedule}>submit</button> */}
      </main>
      <section id="AmortizationSchedule">
        <h2>Amortization schedule</h2>

        <button onClick={()=>generateCalculation(endingPrincipal)}>Calculate</button>
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
            {newEndingPrincipalArray.map((col, index)=>(
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
      <InterestPayments interestPaid={interestPaidArray}/>       
    </div>
    
  );
}

export default App;


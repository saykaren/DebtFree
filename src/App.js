import React, { useState } from 'react';
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

const numberConverter =(value) =>{
  return parseFloat((value).toFixed(2));
}




function App() {

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
  const [monthDate, setMonthDate] = useState(startMonth);

  console.log({endingPrincipal});

  let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
  const generateCalculation = (currentPrincipal) =>{
    // console.log({currentPrincipal});
    if(currentPrincipal>0){
      let paymentInterestPaid = numberConverter((currentPrincipal*((interestRate*.01)/12)));
      let principalPaid = numberConverter(monthlyPayment-paymentInterestPaid)
      let balance = numberConverter(currentPrincipal-principalPaid);

      setPrincipalPaidArray([...principalPaidArray, principalPaid]);
      setInterestPaidArray([...interestPaidArray, paymentInterestPaid]);
      setNewEndingPrincipalArray([...newEndingPrincipalArray, balance]);
      // (monthDate[monthDate.length-1] > 12) ? setMonthDate([...monthDate, 1]) : setMonthDate([...monthDate, monthDate[monthDate.length-1]+1]);
      console.log({newEndingPrincipalArray});

      console.log({balance});
      setEndingPrincipal(balance);


      console.log({principalPaidArray, interestPaidArray, newEndingPrincipalArray});
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
      <section >
        <h2>Amortization schedule</h2>

        <button onClick={()=>generateCalculation(endingPrincipal)}>new click </button>
        <div id="amortizationResults">


          <div className="month">
            {monthArray.map((col, index)=>(
              <div
                className="list"
                key={index}
              >
                {col}  
                </div>
            ))}
          </div>
          <div className="prinipalPaid">
            {principalPaidArray.map((col, index)=>(
              <div
                className="list"
                key={index}
              >
                {col}  
                </div>
            ))}
          </div>
          <div className="interestPaid">
            {interestPaidArray.map((col, index)=>(
              <div
                className="list"
                key={index}
              >
                {col}  
                </div>
            ))}
          </div>
          <div className="updatedPrincipal">
            {newEndingPrincipalArray.map((col, index)=>(
              <div
                className="list"
                key={index}
              >
                {col}  
                </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;


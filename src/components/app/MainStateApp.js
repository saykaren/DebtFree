import React, { useState} from 'react';
import './../stylesheet/App.scss';
import InterestPayments from './InterestPayments';
import Completion from './Completion';
import HypotheticalAnalysis from './HypotheticalAnalysis';
import ResultArrayReturn from './forms/ResultArrayReturn';
import numberConverter from'./calculations/numberConverter';
import FormDiv from './forms/FormDiv';
import InputSection from './InputSection';
import AmortizationResult from './pages/Amortization';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Footer from './Footer';
import Graphs from './pages/Graphs';


///Dates
let todayDate = new Date();
let monthToday = todayDate.getMonth();
let yearToday = todayDate.getFullYear();


export const titleInfo = ["Date", "Principal Paid", "Interest Paid", "Ending Principal"];
const titleExtraInfo = ["Principal Paid", "Interest Paid", "Ending Principal"];

const MainStateApp= () => {
  
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  
  let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let yearArray = [2020];

  // // //User Input 
  const [principal, setPrincipal] = useState(10000);
  const [interestRate, setInterestRate] = useState(3.125);
  const [monthlyPayment, setMonthlyPayment] = useState(847.50);
  const [extraPayment, setExtraPayment] = useState(100);

  console.log({interestRate});
    
  //Extra payment 
  const [extraPrincipalPaidArray, setExtraPrincipalPaidArray] = useState([]);
  const [extraInterestPaidArray, setExtraInterestPaidArray] = useState([]);
  const [extraNewEndingPrincipalArray, setExtraNewEndingPrincipalArray] = useState([]);

  

  //Update Input
  const [principalPaidArray, setPrincipalPaidArray] = useState([]);
  const [interestPaidArray, setInterestPaidArray] = useState([]);
  const [newEndingPrincipalArray, setNewEndingPrincipalArray] = useState([]);
  const [monthDate, setMonthDate] = useState([]);

 
  const generateCalculation = () =>{
    console.log(extraNewEndingPrincipalArray);
    if(extraNewEndingPrincipalArray.length<1){
      setExtraNewEndingPrincipalArray([principal]);
    }

    if(newEndingPrincipalArray.length<1){
      setNewEndingPrincipalArray([principal]);
    }
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
    if(extraCurrentPrincipal>(monthlyPayment+extraPayment)){
      let extraPaymentInterestPaid = numberConverter((extraCurrentPrincipal*((interestRate*.01)/12)));
      let extraPrincipalPaid = numberConverter(extraMonthlyPaymentCal-extraPaymentInterestPaid)
      let extraBalance = numberConverter(extraCurrentPrincipal-extraPrincipalPaid);

      setExtraPrincipalPaidArray([...extraPrincipalPaidArray, extraPrincipalPaid]);
      setExtraInterestPaidArray([...extraInterestPaidArray, extraPaymentInterestPaid]);


      setExtraNewEndingPrincipalArray([...extraNewEndingPrincipalArray, extraBalance]);

    }
  }


  return (
    <div className="App">
    
      <InputSection 
          principal={principal}
          setPrincipal={setPrincipal}
          interestRate={interestRate} 
          setInterestRate={setInterestRate}
          monthlyPayment={monthlyPayment}
          setMonthlyPayment={setMonthlyPayment}
          extraPayment={extraPayment} 
          setExtraPayment={setExtraPayment}
        />
      {/* <AmortizationResult 
        
        titleInfo={titleInfo} 
        titleExtraInfo={titleExtraInfo}
        extraPayment={extraPayment}
        monthDate={monthDate}
        principalPaidArray={principalPaidArray}
        interestPaidArray={interestPaidArray}
        newEndingPrincipalArray={newEndingPrincipalArray}
        principal={principal}
        generateCalculation={generateCalculation} 
      /> */}

<section className="evaluate">

<InterestPayments 
  interestPaid={interestPaidArray} 
  principal={principal} 
  principalPaid={principalPaidArray}
/>   
<Completion 
  interestPaidArray={interestPaidArray}
  monthArray={monthArray}
  principal={principal}
/>
</section>   

      <section className="results">
        <section id="AmortizationSchedule">
        <button onClick={()=>generateCalculation()}>Calculate</button>
        <h2>Amortization schedule</h2>
          <table>
            <tr className="titleGroup">
                {titleInfo.map((col, index)=>(
                  <th className="title"
                    key={index}
                  >
                    {col}
                    </th>
                ))}

            {titleExtraInfo.map((col, index)=>(
              <th className={extraPayment>0 ? "title" : "hidden"}
                key={index}
                >
                  {col}
                </th>
            ))}
            </tr>
          </table>





{/* 
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
          
            {titleExtraInfo.map((col, index)=>(
            <div className={ extraPayment>0 ? "titleExtra" : 'hidden'}
              key={index}
              >
              {col}
              </div>
            ))}

          </div> */}
          
          
          <div id="amortizationResults">
            <ResultArrayReturn specificClassName="month, resultsBoxes" arrayToMap={monthDate}/>
            <ResultArrayReturn specificClassName="principalPaid, resultsBoxes" arrayToMap={principalPaidArray} symbol="$"/>
            <ResultArrayReturn specificClassName="interestPaid, resultsBoxes" arrayToMap={interestPaidArray} symbol="$"/>

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
          
            <HypotheticalAnalysis 
              extraPayment={extraPayment} 
              extraPrincipalPaidArray={extraPrincipalPaidArray} 
              extraInterestPaidArray={extraInterestPaidArray} 
              monthArray={monthDate} 
              principal={principal}
              extraNewEndingPrincipalArray={extraNewEndingPrincipalArray}
            />
 
          </div>
        </section>
     
      </section>
      <Footer />
    </div>
    
  );
}

export default MainStateApp;

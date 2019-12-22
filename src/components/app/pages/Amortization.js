import React from 'react';
import { useHistory} from 'react-router';
import MainStateApp from "./../MainStateApp";
import ResultArrayReturn from './../forms/ResultArrayReturn';
import titleInfo from './../MainStateApp';

console.log(titleInfo);

const AmortizationResult = ({titleInfo, titleExtraInfo, extraPayment, monthDate, principalPaidArray, interestPaidArray, newEndingPrincipalArray, 
principal, generateCalculation}) =>{
    const history = useHistory();
    // console.log({titleInfo});
    // console.log({titleExtraInfo});
    // console.log({extraPayment});
    // console.log({principal});
    //  monthDate, principalPaidArray, interestPaidArray, newEndingPrincipalArray, 
    //     principal, generateCalculation})

    const goBackHandle = () => {
        history.goBack();
    }
    return(
        <>

        <button onClick={goBackHandle}>Go Back</button>
        {/* <div id="AmortizationSchedule">
          <h2>Amortization schedule</h2>
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

          </div>
        </div>

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
        </div> */}

        </>
    )
}

export default AmortizationResult;
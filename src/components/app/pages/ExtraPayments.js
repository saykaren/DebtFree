import React from 'react';
import {useHistory} from 'react-router';

const ExtraPayments = () =>{
    const history = useHistory();

    const goBackHistory = ()=>{
        history.goBack();
    }

    return(
        <>
        <div>Extra Payments</div>
        <button onClick={goBackHistory}>Go Back</button>
        </>
    )
}

export default ExtraPayments;
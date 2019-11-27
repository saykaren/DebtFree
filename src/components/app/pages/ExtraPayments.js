import React from 'react';
import {useHistory} from 'react-router';

const ExtraPayments = () =>{
    const history = useHistory();

    const goBackHistory = ()=>{
        history.goBack();
    }

    return(
        <>
            <button onClick={goBackHistory}>Go Back</button>
            <div>Extra Payments</div>

        </>
    )
}

export default ExtraPayments;
import React from 'react';
import {useLocation, useHistory} from 'react-router';

const Amortization = () =>{
    const location = useLocation();
    const history = useHistory();
    console.log(location);

    const goBackHandle = () => {
        history.goBack();
    }
    return(
        <>
        <div>Amortization</div>
        <div>State {location.pathname}</div>
        <div>From : {location.state.from}</div>
        <button onClick={goBackHandle}>Go Back</button>
        </>
    )
}

export default Amortization;
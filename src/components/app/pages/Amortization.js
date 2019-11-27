import React from 'react';
import { useHistory} from 'react-router';
import MainStateApp from "./../MainStateApp";

const Amortization = () =>{
    const history = useHistory();


    const goBackHandle = () => {
        history.goBack();
    }
    return(
        <>

        <button onClick={goBackHandle}>Go Back</button>
        <MainStateApp />
        </>
    )
}

export default Amortization;
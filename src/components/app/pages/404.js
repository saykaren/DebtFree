import React from 'react';
import {useHistory} from 'react-router';

const NotFound404 = () =>{
    const history = useHistory();

    const goBackHistory = ()=>{
        history.goBack();
    }

    return(
        <>
            <button onClick={goBackHistory}>Go Back</button>
            <div>No Page Found Please go back </div>

        </>
    )
}

export default NotFound404;
import React from 'react';
import {useParams, useHistory} from 'react-router';

const Graphs = () =>{
    const {firstname, lastname} = useParams();
    const {history} = useHistory();

    const goBackHistory = () =>{
        history.goBack();
    }
    return(
        <>
            <button onClick={goBackHistory}>Go Back</button>
            <div>Graphs {firstname} {lastname}</div>
            
        </>
    )
}

export default Graphs;
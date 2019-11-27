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
            <div>Graphs {firstname} {lastname}</div>
            <button onClick={goBackHistory}>Go Back</button>
        </>
    )
}

export default Graphs;
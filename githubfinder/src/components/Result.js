import React from 'react';
import ResultCard from './ResultCard'

const Result = ({userData}) => {
    const{status, data} = userData;
    switch(status){
        case "pending":
            return <div style = {{color:"gray", fontSize:"24px"}}>loading...</div>
        case "resolved":
            return <ResultCard data={data}/>;
        case "rejected":
            return <div style = {{color:"gray", fontSize:"24px"}}>User Not Found</div>
        case "idle":
        default:
          return <div></div>
    }
};

export default Result;
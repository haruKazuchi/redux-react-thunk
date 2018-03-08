import React from 'react';

export default function ({dataNfl, nfl}){

  const iterateData = (data)=>{
    return data.map((obj,index) => {
      return(
        <li key={index}>
          <span>{obj.Team}</span><br/>
          <span>{obj.Team_name}</span><br/>
          <span>{obj.Team_city}</span>
        </li>
      )
    });
  };
  return (
    <React.Fragment>
      <button onClick={dataNfl}>Click</button>
      <ul>
        {iterateData(nfl.nfl)}
      </ul>
    </React.Fragment>
  )
}
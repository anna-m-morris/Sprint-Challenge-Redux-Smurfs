import React from 'react';
import Smurf from "./Smurf"

const SmurfList = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return (
          <Smurf
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
            key={smurf.id}
            id={smurf.id}
          />
        );
      })}
    </div>
  );
};

export default SmurfList;

import React from 'react';

const Action = (props) => (
  <div>
    <button onClick={props.handlePick} disabled = {!props.hasOptions}>
      Pick a random option
    </button>
    {props.selectedOption && <p>{props.selectedOption}</p>}
  </div>
);

export default Action;

import React from 'react';

const Action = (props) => (
  <div>
    <button className="big-button" onClick={props.handlePick} disabled = {!props.hasOptions}>
      What should I do?
    </button>
    {props.selectedOption && <p>{props.selectedOption}</p>}
  </div>
);

export default Action;

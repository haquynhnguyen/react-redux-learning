import React from 'react';

// Option -> Option component here -> render it in Options
const Option = (props) => (
  <div>
    Option: {props.optionText} 
    <button onClick={(e) => {
      props.handleDeleteOption(props.optionText)
    }}>
      x
    </button>
  </div>
);

export default Option;
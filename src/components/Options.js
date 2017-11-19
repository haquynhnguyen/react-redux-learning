import React from 'react';
import Option from './Option';

// Options -> Options component here
// AddOption -> AddOption conponent here
// setup options prop for Options component
// Render the length of the array
const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an options</p>}
    {
      props.options.map(option => 
      <Option key={option} optionText={option}
      handleDeleteOption = {props.handleDeleteOption}/>)
    }
  </div>
);

export default Options;

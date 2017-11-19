import React from 'react';

// 1. setup the form with text input and submit button
// 2. wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component {
  state = {
    error : undefined
  }

  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim(); // trim() => remove blank space
    const error = this.props.handleAddOption(option);
    this.setState(() => ({error}));

    if(!error){
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.handleAddOption}>
              <input className="add-option__input" type="text" name="option"/>
              <button className="button">Add Option</button>
          </form>
        </div>
    );
  }
}

export default AddOption;
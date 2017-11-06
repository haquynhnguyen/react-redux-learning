//stateless functional component
// if a component just have return -> we can use stateless function to implement it

class IndecitionApp extends React.Component {
	constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: [],
      randomOption: ''
    }
	}

  handlePick() {
    this.setState((prevState) => {
      const randomNum = Math.floor(Math.random() * prevState.options.length);
      const option = prevState.options[randomNum];
      return {
        randomOption: option
      }
    });
  }

  // handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }

  handleAddOption(option) {
    if(!option){
      return "Enter valid value to add item";
    } else if(this.state.options.indexOf(option) > -1){
      return 'this options already exists';
    }

    this.setState((preState) => {
      return {
        options: preState.options.concat([option])
      }
    })
  }

  //handlePick -> pass down to Action and setup onClick - bind here
  // random an option

	render() {
		const title = "Indecition";
		const subTitle = "Put your lif in the hands of a computer";
		return (
			<div>
				<Header title={title} subTitle={subTitle}/>
				<Action randomOption={this.state.randomOption} handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
				<Options options={this.state.options} 
        handleDeleteOptions={this.handleDeleteOptions} />
				<AddOption 
          handleAddOption = {this.handleAddOption}/>
			</div>
		);
	}
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
}

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled = {!props.hasOptions}>
        Pick a random option
      </button>
      {props.randomOption && <p>{props.randomOption}</p>}
    </div>
  );
}

// Options -> Options component here
// AddOption -> AddOption conponent here
// setup options prop for Options component
// Render the length of the array
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map(option => <Option key={option} optionText={option}/>)
      }
    </div>
  );
}

class RemoveOption extends React.Component {
	handleRemoveOption() {
		alert('Remove this option');
	}
	render() {
		return (
			<button onClick={this.handleRemoveOption}>x</button>
		);
	}
}

// Option -> Option component here -> render it in Options
const Option = (props) => {
  return (
    <div>
      Option: {props.optionText} <RemoveOption />
    </div>
  );
}

// 1. setup the form with text input and submit button
// 2. wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

	handleAddOption(e) {
		e.preventDefault();
    const option = e.target.elements.option.value.trim(); // trim() => remove blank space
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error }
    });
	}

	render() {
		return (
			<div>
        {this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<h3>Add Option Form: </h3>
					<input type="text" name="option"/>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

ReactDOM.render(<IndecitionApp />, document.getElementById('app'));
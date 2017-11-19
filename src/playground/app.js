//stateless functional component
// if a component just have return -> we can use stateless function to implement it

class IndecitionApp extends React.Component {
	constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options,
      selectedOption: ''
    }
	}

  componentDidMount() { // component init
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(() => ({options}));
      }
    } catch(e){
      // if json is not valid
      // do nothing at all
    }    
  }

  componentDidUpdate(prevProps, prevState) { // component updated
    if(prevProps.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    } // else => nothing changed
  }

  componentWillUnmount() { // changed to another component
    console.log('componentWillUnmount');
  }

  handlePick() {
    this.setState((prevState) => {
      const randomNum = Math.floor(Math.random() * prevState.options.length);
      const option = prevState.options[randomNum];
      return {
        selectedOption: option
      }
    });
  }

  // handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  }

  handleAddOption(option) {
    if(!option){
      return "Enter valid value to add item";
    } else if(this.state.options.indexOf(option) > -1){
      return 'this options already exists';
    }

    this.setState(preState => ({options: preState.options.concat([option])}))
  }



  //handlePick -> pass down to Action and setup onClick - bind here
  // random an option

	render() {
    const subTitle = "Put your lif in the hands of a computer";
    
		return (
			<div>
				<Header/>
				<Action selectedOption={this.state.selectedOption} handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
				<Options options={this.state.options} 
        handleDeleteOptions={this.handleDeleteOptions} 
        handleDeleteOption = {this.handleDeleteOption}/>
				<AddOption 
          handleAddOption = {this.handleAddOption}/>
			</div>
		);
	}
}

IndecitionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2> }
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecition'
}

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled = {!props.hasOptions}>
        Pick a random option
      </button>
      {props.selectedOption && <p>{props.selectedOption}</p>}
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
      {props.options.length === 0 && <p>Please add an options</p>}
      {
        props.options.map(option => 
        <Option key={option} optionText={option}
        handleDeleteOption = {props.handleDeleteOption}/>)
      }
    </div>
  );
}

// class RemoveOption extends React.Component {
// 	handleRemoveOption() {
// 		alert('Remove this option');
// 	}
// 	render() {
// 		return (
// 			<button onClick={this.handleRemoveOption}>x</button>
// 		);
// 	}
// }

// Option -> Option component here -> render it in Options
const Option = (props) => {
  return (
    <div>
      Option: {props.optionText} 
      <button onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}>
        x
      </button>
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
    this.setState(() => ({error}));

    if(!error){
      e.target.elements.option.value = '';
    }
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
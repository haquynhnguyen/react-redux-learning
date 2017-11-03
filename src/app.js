class IndecitionApp extends React.Component {
	render() {
		const title = "Indecition";
		const subTitle = "Put your lif in the hands of a computer";
		const options = ['Thing one', 'Thing two', 'Thing three'];
		return (
			<div>
				<Header title={title} subTitle={subTitle}/>
				<Action />
				<Options options={options}/>
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subTitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {

	handlePick() {
		alert('handlePick');
	}

	render() {
		return (
			<div>
				<button onClick={this.handlePick}>What should I do?</button>
			</div>
		);
	}
}

// Options -> Options component here
// AddOption -> AddOption conponent here
// setup options prop for Options component
// Render the length of the array
class Options extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}

	handleRemoveAll() {
		// alert('remove all');
		console.log(this.props.options);
	}
	
	render() {
		// console.log(this.props);
		return (
			<div>
				<button onClick={this.handleRemoveAll}>Remove All</button>
				{
					this.props.options.map(option => <Option key={option} optionText={option}/>)
				}
			</div>
		);
	}
}

// Add Remove all Button
// Setup handleRemoveAll -> alert some messgae
// Setip onClick to fire the method
// class RemoveAll extends React.Component {
// 	handleRemoveAll() {
// 		alert('Remove All options');
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.handleRemoveAll}>Remove All</button>
// 			</div>
// 		);
// 	}
// }

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
class Option extends React.Component {
	render() {
		return (
			<div>
				Option: {this.props.optionText} <RemoveOption />
			</div>
		);
	}
}

// 1. setup the form with text input and submit button
// 2. wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert
class AddOption extends React.Component {
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim(); // trim() => remove blank space
		if(option){
			alert('Add '+ option);
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<h3>Add Option Form: </h3>
					<input type="text" name="option"/>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecitionApp />, document.getElementById('app'));
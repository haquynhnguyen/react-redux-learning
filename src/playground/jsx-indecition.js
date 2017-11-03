//JSX - JavaScript XML

//Only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if option.length ? 0 "Here are your options" "No options"
const app = {
	title: "This is JSX File! change again",
	subTitle: "This is some info",
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();
	const option = e.target.elements.option.value;
	if(option){
		app.options.push(option);
		e.target.elements.option.value = ''; // reset the value
		render();
	}
};

// create remove All button
// onClick -> wipe the array -> render
const onRemoveAll = () => {
	app.options = [];
	render();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length); // lam tron so
	const option = app.options[randomNum];
	alert(option);
	console.log("randomNum: ",randomNum);
};

const appRoot = document.getElementById('app');

// create render function that render the new jsx 
// call it right away
// call it after options array added to
const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subTitle && <p>{app.subTitle}</p>}
			<p>{app.options.length}</p>
			<div>
				<button disabled = {app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			</div>
			{app.options.length > 0 ? <div>
				<p>Here are your options: </p>
				<ol>
					{
						app.options.map(
						(item,index) => 
							<li key={index}>Item {item}</li>
						)
					}
				</ol>
			</div> : "No Options"}

			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
				<button onClick={onRemoveAll}>Remove All</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
}

render();

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecitionApp = function (_React$Component) {
	_inherits(IndecitionApp, _React$Component);

	function IndecitionApp() {
		_classCallCheck(this, IndecitionApp);

		return _possibleConstructorReturn(this, (IndecitionApp.__proto__ || Object.getPrototypeOf(IndecitionApp)).apply(this, arguments));
	}

	_createClass(IndecitionApp, [{
		key: "render",
		value: function render() {
			var title = "Indecition";
			var subTitle = "Put your lif in the hands of a computer";
			var options = ['Thing one', 'Thing two', 'Thing three'];
			return React.createElement(
				"div",
				null,
				React.createElement(Header, { title: title, subTitle: subTitle }),
				React.createElement(Action, null),
				React.createElement(Options, { options: options }),
				React.createElement(AddOption, null)
			);
		}
	}]);

	return IndecitionApp;
}(React.Component);

var Header = function (_React$Component2) {
	_inherits(Header, _React$Component2);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: "render",
		value: function render() {
			console.log(this.props);
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					this.props.title
				),
				React.createElement(
					"h2",
					null,
					this.props.subTitle
				)
			);
		}
	}]);

	return Header;
}(React.Component);

var Action = function (_React$Component3) {
	_inherits(Action, _React$Component3);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
		key: "handlePick",
		value: function handlePick() {
			alert('handlePick');
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{ onClick: this.handlePick },
					"What should I do?"
				)
			);
		}
	}]);

	return Action;
}(React.Component);

// Options -> Options component here
// AddOption -> AddOption conponent here
// setup options prop for Options component
// Render the length of the array


var Options = function (_React$Component4) {
	_inherits(Options, _React$Component4);

	function Options(props) {
		_classCallCheck(this, Options);

		var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

		_this4.handleRemoveAll = _this4.handleRemoveAll.bind(_this4);
		return _this4;
	}

	_createClass(Options, [{
		key: "handleRemoveAll",
		value: function handleRemoveAll() {
			// alert('remove all');
			console.log(this.props.options);
		}
	}, {
		key: "render",
		value: function render() {
			// console.log(this.props);
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{ onClick: this.handleRemoveAll },
					"Remove All"
				),
				this.props.options.map(function (option) {
					return React.createElement(Option, { key: option, optionText: option });
				})
			);
		}
	}]);

	return Options;
}(React.Component);

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

var RemoveOption = function (_React$Component5) {
	_inherits(RemoveOption, _React$Component5);

	function RemoveOption() {
		_classCallCheck(this, RemoveOption);

		return _possibleConstructorReturn(this, (RemoveOption.__proto__ || Object.getPrototypeOf(RemoveOption)).apply(this, arguments));
	}

	_createClass(RemoveOption, [{
		key: "handleRemoveOption",
		value: function handleRemoveOption() {
			alert('Remove this option');
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"button",
				{ onClick: this.handleRemoveOption },
				"x"
			);
		}
	}]);

	return RemoveOption;
}(React.Component);

// Option -> Option component here -> render it in Options


var Option = function (_React$Component6) {
	_inherits(Option, _React$Component6);

	function Option() {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	}

	_createClass(Option, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				"Option: ",
				this.props.optionText,
				" ",
				React.createElement(RemoveOption, null)
			);
		}
	}]);

	return Option;
}(React.Component);

// 1. setup the form with text input and submit button
// 2. wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert


var AddOption = function (_React$Component7) {
	_inherits(AddOption, _React$Component7);

	function AddOption() {
		_classCallCheck(this, AddOption);

		return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
	}

	_createClass(AddOption, [{
		key: "handleAddOption",
		value: function handleAddOption(e) {
			e.preventDefault();
			var option = e.target.elements.option.value.trim(); // trim() => remove blank space
			if (option) {
				alert('Add ' + option);
			}
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"form",
					{ onSubmit: this.handleAddOption },
					React.createElement(
						"h3",
						null,
						"Add Option Form: "
					),
					React.createElement("input", { type: "text", name: "option" }),
					React.createElement(
						"button",
						null,
						"Add Option"
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecitionApp, null), document.getElementById('app'));

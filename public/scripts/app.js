'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//stateless functional component
// if a component just have return -> we can use stateless function to implement it

var IndecitionApp = function (_React$Component) {
  _inherits(IndecitionApp, _React$Component);

  function IndecitionApp(props) {
    _classCallCheck(this, IndecitionApp);

    var _this = _possibleConstructorReturn(this, (IndecitionApp.__proto__ || Object.getPrototypeOf(IndecitionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      options: [],
      randomOption: ''
    };
    return _this;
  }

  _createClass(IndecitionApp, [{
    key: 'handlePick',
    value: function handlePick() {
      this.setState(function (prevState) {
        var randomNum = Math.floor(Math.random() * prevState.options.length);
        var option = prevState.options[randomNum];
        return {
          randomOption: option
        };
      });
    }

    // handleDeleteOptions

  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return 'this options already exists';
      }

      this.setState(function (preState) {
        return {
          options: preState.options.concat([option])
        };
      });
    }

    //handlePick -> pass down to Action and setup onClick - bind here
    // random an option

  }, {
    key: 'render',
    value: function render() {
      var title = "Indecition";
      var subTitle = "Put your lif in the hands of a computer";
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subTitle: subTitle }),
        React.createElement(Action, { randomOption: this.state.randomOption, handlePick: this.handlePick, hasOptions: this.state.options.length > 0 }),
        React.createElement(Options, { options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecitionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    React.createElement(
      'h2',
      null,
      props.subTitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick, disabled: !props.hasOptions },
      'Pick a random option'
    ),
    props.randomOption && React.createElement(
      'p',
      null,
      props.randomOption
    )
  );
};

// Options -> Options component here
// AddOption -> AddOption conponent here
// setup options prop for Options component
// Render the length of the array
var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option });
    })
  );
};

var RemoveOption = function (_React$Component2) {
  _inherits(RemoveOption, _React$Component2);

  function RemoveOption() {
    _classCallCheck(this, RemoveOption);

    return _possibleConstructorReturn(this, (RemoveOption.__proto__ || Object.getPrototypeOf(RemoveOption)).apply(this, arguments));
  }

  _createClass(RemoveOption, [{
    key: 'handleRemoveOption',
    value: function handleRemoveOption() {
      alert('Remove this option');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { onClick: this.handleRemoveOption },
        'x'
      );
    }
  }]);

  return RemoveOption;
}(React.Component);

// Option -> Option component here -> render it in Options


var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    'Option: ',
    props.optionText,
    ' ',
    React.createElement(RemoveOption, null)
  );
};

// 1. setup the form with text input and submit button
// 2. wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

var AddOption = function (_React$Component3) {
  _inherits(AddOption, _React$Component3);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this3.handleAddOption = _this3.handleAddOption.bind(_this3);
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim(); // trim() => remove blank space
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement(
            'h3',
            null,
            'Add Option Form: '
          ),
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var User = function User(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Name: ',
      props.name
    ),
    React.createElement(
      'p',
      null,
      'Age: ',
      props.age
    )
  );
};

ReactDOM.render(React.createElement(IndecitionApp, null), document.getElementById('app'));

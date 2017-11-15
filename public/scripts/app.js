"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test123 = function (_React$Component) {
  _inherits(Test123, _React$Component);

  function Test123(props) {
    _classCallCheck(this, Test123);

    var _this = _possibleConstructorReturn(this, (Test123.__proto__ || Object.getPrototypeOf(Test123)).call(this, props));

    _this.renderYear = _this.renderYear.bind(_this);
    _this.handleString = _this.handleString.bind(_this);
    _this.handleDaysOfYear = _this.handleDaysOfYear.bind(_this);
    _this.handleDaysOfMonth = _this.handleDaysOfMonth.bind(_this);
    _this.handleDaysOfDays = _this.handleDaysOfDays.bind(_this);

    _this.state = {
      date1: "",
      date2: "",
      result: 0,
      dayOfYear: 0,
      dayOfMonth: 0,
      days: 0
    };
    return _this;
  }

  _createClass(Test123, [{
    key: "renderYear",
    value: function renderYear(e) {
      e.preventDefault();
      var date1Value = e.target.elements.date1.value;
      var date2Value = e.target.elements.date2.value;

      var year1Obj = this.handleString(date1Value);
      var year2Obj = this.handleString(date2Value);

      var daysBYears = this.handleDaysOfYear(year1Obj.years, year2Obj.years);
      var daysBMonths = this.handleDaysOfMonth(year1Obj.months, year2Obj.months);
      var daysBDays = this.handleDaysOfDays(year1Obj.days, year2Obj.days);

      this.setState(function () {
        return {
          dayOfYear: daysBYears,
          dayOfMonth: daysBMonths,
          days: daysBDays,
          result: daysBYears + daysBMonths + daysBDays
        };
      });
    }
  }, {
    key: "handleDaysOfYear",
    value: function handleDaysOfYear(year1, year2) {
      var _daysToPlus = 0;
      if (year1 === year2) {
        _daysToPlus = 0;
      } else {
        for (var i = year1; i < year2; i++) {
          if (this.leapYear(i)) {
            _daysToPlus += 366;
          } else {
            _daysToPlus += 365;
          }
        }
      }
      return _daysToPlus;
    }
  }, {
    key: "handleDaysOfMonth",
    value: function handleDaysOfMonth(month1, month2) {
      console.log(month2);
      var a = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // list days of 12 months
      var _daysToPlus = 0;

      if (month1 === month2) {
        _daysToPlus = 0;
      } else if (month1 < month2) {
        for (var j = month1; j < month2; j++) {
          _daysToPlus += a[j - 1];
        }
      } else if (month1 > month2) {
        for (var i = month2; i < month1; i++) {
          _daysToPlus -= a[i - 1];
        }
      }

      return _daysToPlus;
    }
  }, {
    key: "handleDaysOfDays",
    value: function handleDaysOfDays(day1, day2) {
      var _daysToPlus = 0;
      _daysToPlus = day2 - day1;

      return _daysToPlus;
    }
  }, {
    key: "leapYear",
    value: function leapYear(year) {
      if (year % 400 === 0) return true;else if (year % 100 != 0 && year % 4 === 0) return true;
      return false;
    }
  }, {
    key: "handleString",
    value: function handleString(str) {
      var strResult = str.split('/');
      var _day = Number(strResult[0]);
      var _month = Number(strResult[1]);
      var _year = Number(strResult[2]);

      console.log(strResult);
      console.log(_day, _month, _year);

      return {
        days: _day,
        months: _month,
        years: _year
      };
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.renderYear },
          "Date1: ",
          React.createElement("input", { type: "text", name: "date1" }),
          "Date2: ",
          React.createElement("input", { type: "text", name: "date2" }),
          React.createElement(
            "button",
            null,
            "Render"
          ),
          React.createElement(
            "strong",
            null,
            this.state.result
          ),
          React.createElement(
            "p",
            null,
            "So ngay giua 2 nam: ",
            this.state.dayOfYear
          ),
          React.createElement(
            "strong",
            null,
            "So nam giua 2 nam: ",
            this.state.result > 365 ? Math.round(this.state.result / 365) : 0
          ),
          React.createElement(
            "p",
            null,
            "So ngay giua 2 thang: ",
            this.state.dayOfMonth
          ),
          React.createElement(
            "strong",
            null,
            "So thang giua 2 thang: ",
            this.state.result > 31 ? Math.round(this.state.result / 31) : 0
          ),
          React.createElement(
            "p",
            null,
            "So ngay giua 2 ngay: ",
            this.state.days
          )
        )
      );
    }
  }]);

  return Test123;
}(React.Component);

ReactDOM.render(React.createElement(Test123, null), document.getElementById('app'));

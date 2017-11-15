class Test123 extends React.Component {
    constructor(props) {
      super(props)
      this.renderYear = this.renderYear.bind(this);
      this.handleString = this.handleString.bind(this);
      this.handleDaysOfYear = this.handleDaysOfYear.bind(this);
      this.handleDaysOfMonth = this.handleDaysOfMonth.bind(this);
      this.handleDaysOfDays = this.handleDaysOfDays.bind(this);
  
      this.state = {
        date1: "",
        date2: "",
        result: 0,
        dayOfYear: 0,
        dayOfMonth: 0,
        days: 0
      }
    }
  
    renderYear(e) {
        e.preventDefault();
        const date1Value = e.target.elements.date1.value;
        const date2Value = e.target.elements.date2.value;
    
        const year1Obj = this.handleString(date1Value);
        const year2Obj = this.handleString(date2Value);

        let daysBYears = this.handleDaysOfYear(year1Obj.years, year2Obj.years);
        let daysBMonths = this.handleDaysOfMonth(year1Obj.months, year2Obj.months);
        let daysBDays = this.handleDaysOfDays(year1Obj.days, year2Obj.days);
  
        this.setState(() => ({
            dayOfYear: daysBYears,
            dayOfMonth: daysBMonths,
            days: daysBDays,
            result: daysBYears + daysBMonths + daysBDays
        }));
    }
  
    handleDaysOfYear(year1, year2) {
        let _daysToPlus = 0;
        if(year1 === year2){
            _daysToPlus = 0;
        } else {
            for(var i = year1; i < year2; i++){
                if(this.leapYear(i)) {_daysToPlus += 366}
                else {_daysToPlus += 365}
            }
        }
        return _daysToPlus;
    }
  
    handleDaysOfMonth(month1, month2) {
      console.log(month2);
      const a = [31,28,31,30,31,30,31,31,30,31,30,31] // list days of 12 months
      let _daysToPlus = 0;

      if(month1 === month2){
        _daysToPlus = 0
      } else if(month1 < month2) {
        for(let j = month1; j < month2; j++){
            _daysToPlus += a[j-1];
        }
      } else if(month1 > month2) {
        for(let i = month2; i < month1; i++){
            _daysToPlus -= a[i-1];
        }
      }
      
      return _daysToPlus;
    }

    handleDaysOfDays(day1, day2) {
        let _daysToPlus = 0;
        _daysToPlus = day2 - day1;
        
        return _daysToPlus;
    }

    leapYear(year) {
      if(year % 400 === 0 ) return true;
      else if (year % 100 != 0 && year % 4 ===0 ) return true;
      return false;
    }
  
    handleString(str) {
      let strResult = str.split('/');
      const _day = Number(strResult[0]);
      const _month = Number(strResult[1]);
      const _year = Number(strResult[2]);
  
      console.log(strResult);
      console.log(_day, _month, _year);
  
      return ({
        days: _day,
        months: _month,
        years: _year
      });
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.renderYear}>
            Date1: <input type="text" name="date1"/>
            Date2: <input type="text" name="date2"/>
            <button>Render</button>
  
            {<strong>{this.state.result}</strong>}
            {<p>So ngay giua 2 nam: {this.state.dayOfYear}</p>}
            {<strong>So nam giua 2 nam: { (this.state.result > 365) ? Math.round(this.state.result / 365) : 0}</strong> }
            {<p>So ngay giua 2 thang: {this.state.dayOfMonth}</p>}
            {<strong>So thang giua 2 thang: {((this.state.result > 31)) ? Math.round(this.state.result / 31) : 0}</strong>}
            {<p>So ngay giua 2 ngay: {this.state.days}</p>}
          </form>
        </div>
      )
    }
  }

  ReactDOM.render(<Test123 />, document.getElementById('app'));
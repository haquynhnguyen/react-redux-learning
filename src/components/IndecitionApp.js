import React from 'react';

import AddOption from './AddOptions';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';


//stateless functional component
// if a component just have return -> we can use stateless function to implement it

class IndecitionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handlePick = () => {
    this.setState((prevState) => {
      const randomNum = Math.floor(Math.random() * prevState.options.length);
      const option = prevState.options[randomNum];
      return {
        selectedOption: option
      }
    });
  }

  handleCloseModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }

  // handleDeleteOptions
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  }

  handleAddOption = option => {
    if(!option){
      return "Enter valid value to add item";
    } else if(this.state.options.indexOf(option) > -1){
      return 'this options already exists';
    }

    this.setState(preState => ({options: preState.options.concat([option])}))
  }

  componentDidMount = () => { // component init
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

  componentDidUpdate = (prevProps, prevState) => { // component updated
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    } // else => nothing changed
  }

  componentWillUnmount = () => { // changed to another component
    console.log('componentWillUnmount');
  }

	render() {
    const subTitle = "Put your lif in the hands of a computer";
    
		return (
			<div>
				<Header />
				<Action selectedOption={this.state.selectedOption} handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
				<Options options={this.state.options} 
        handleDeleteOptions={this.handleDeleteOptions} 
        handleDeleteOption = {this.handleDeleteOption}/>
				<AddOption 
          handleAddOption = {this.handleAddOption}/>
        <OptionModal selectedOption={this.state.selectedOption} 
          handleCloseModal = {this.handleCloseModal} 
        />
			</div>
		);
	}
}


export default IndecitionApp;
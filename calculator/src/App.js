import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Display from './components/Display';

class App extends React.Component {
  state = { 
    displayValue: 0, 
    prevValue: "", 
    operation: "",
    clearEntry: false,
    calculatedSolution: false
  };

  handleNumberClick = (e) => {
    if (this.state.displayValue) {
      this.setState({displayValue: this.state.displayValue + e.target.value})
    } else {
      this.setState({displayValue: e.target.value})
    }
  }

  handleOperations = (e) => {
    this.setState({
      operation: e.target.value, 
      prevValue: this.state.displayValue, 
      displayValue: ""
    });
  }

  handleEquals = (e) => {
    let num1 = Number(this.state.prevValue);
    let num2 = Number(this.state.displayValue);
    if (this.state.operation === "-") {
      this.setState({displayValue: num1 - num2, prevValue: this.state.displayValue, calculatedSolution: true});
    } else if (this.state.operation === "+") {
      this.setState({displayValue: num1 + num2, prevValue: this.state.displayValue, calculatedSolution: true});
    } else if (this.state.operation === "x") {
      this.setState({displayValue: num1 * num2, prevValue: this.state.displayValue, calculatedSolution: true});
    } else if (this.state.operation === "/") {
      this.setState({displayValue: num1 / num2, prevValue: this.state.displayValue, calculatedSolution: true});
    }
  }

  handleNegativity = () => {
    if (this.state.displayValue[0] === "-") {
      this.setState({displayValue: Number(this.state.displayValue) * -1})
    } else {
      this.setState({displayValue: "-" + this.state.displayValue})
    }
  }

  handleClear = () => {
    this.setState({displayValue: 0, clearEntry: true});
    if (this.state.clearEntry === true) {
      this.setState({displayValue:0, prevValue: "", operation: "", clearEntry: false});
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Display 
        handleOperations={this.handleOperations}
        handleNumberClick={this.handleNumberClick} 
        displayValue={this.state.displayValue}
        handleEquals={this.handleEquals}
        handleNegativity={this.handleNegativity}
        handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;

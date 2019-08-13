import React, { Component } from 'react'
import './App.css';
import Button from "./buttons";
import * as math from "mathjs";



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value:""
    }
  }
  getvalue=(a)=>{
       a=this.state.value+a;
    this.setState({
      value:a
    })
    }

  result=()=>{
    let allvalues=math.evaluate(this.state.value);
    this.setState({
      value:allvalues
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <div className="main">
          <div className="screen"><p>
            {this.state.value}
            </p>
          </div>
          <div className="row">
            <Button val={this.getvalue}>1</Button>
            <Button val={this.getvalue}>4</Button>
            <Button val={this.getvalue}>7</Button>
            <Button val={this.getvalue}>.</Button>
          </div>
          <div className="row">
            <Button val={this.getvalue}>2</Button>
            <Button val={this.getvalue}>5</Button>
            <Button val={this.getvalue}>8</Button>
            <Button val={this.getvalue}>0</Button>
          </div>
          <div className="row">
            <Button val={this.getvalue}>3</Button>
            <Button val={this.getvalue}>6</Button>
            <Button val={this.getvalue}>9</Button>
            <Button val={this.result}>=</Button>
          </div>
          <div className="row">
            <Button val={this.getvalue}>+</Button>
            <Button val={this.getvalue}>-</Button>
            <Button val={this.getvalue}>*</Button>
            <Button val={this.getvalue}>/</Button>
          </div>
        </div>
      </div>
    )
  }
}


export default App;

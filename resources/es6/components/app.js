import React,{Component} from 'react';

export default class App extends Component {
  render(){
    return (
      <div>
        <h1>{this.props.dunny}</h1>
        <button onClick={()=>{this.props.asyncIncrement()}}>+</button>
        <button onClick={()=>{this.props.asyncDecrement()}}>-</button>
      </div>
    );
  }
}
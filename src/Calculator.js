import React, { Component } from 'react';

function Calculator(props){
const styles = {
  }
  if(props.immature === true){
	  styles.transition = "2s ease-in-out"
	  styles.transform = "rotate(180deg)"
  }
  else{ 

  }
	return(
<div className="calculator" id="flip" style={styles}>
  <p id="title">CAZIO</p>
  <div className="outline"> 
  <input type="number" disabled="disabled" id="answer" value={props.total} name="total"/>
  </div>
  <div className="row">
    <button className="clear" name = ""  onClick={props.handleClick}>AC</button>
    <button className="clear" name = ""  onClick={props.handleClick}>CE</button>
    <button name = "%" onClick={props.handleClick}>%</button>
    <button name = "/"  onClick={props.handleClick}>÷</button>
  </div>
  <div className="row">
    <button name = "7" onClick={props.handleClick}>7</button>
    <button name = "8" onClick={props.handleClick}>8</button>
    <button name = "9" onClick={props.handleClick}>9</button>
    <button name = "x" onClick={props.handleClick}>x</button>
  </div>
  <div className="row">
    <button name = "4" onClick={props.handleClick}>4</button>
    <button name = "5" onClick={props.handleClick}>5</button>
    <button name = "6" onClick={props.handleClick}>6</button>
    <button>-</button>
  </div>
  <div className="row">
    <button name = "1" onClick={props.handleClick}>1</button>
    <button name = "2" onClick={props.handleClick}>2</button>
    <button name = "3" onClick={props.handleClick}>3</button>
    <button name="+" className="plus" onClick={props.handleClick}>+</button>
  </div>
  <div className="row">
    <button name = "0" onClick={props.handleClick}>0</button>
    <button name = ".">.</button>
    <button name = "=">=</button>
  </div>
</div>
	
	
	)
}

export default Calculator
import React from 'react';
import css from './UserInput.css';
const inputFn = (props) => { return (
    <div class="label-field" >
  <label class="label-field"> Input textbox</label>
  <input id = "text-field" type="text" onChange = {props.changeFn} value = {props.value}></input>
  </div>
 )
};

export default inputFn;
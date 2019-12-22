import React, { useState } from 'react';
import './../../stylesheet/App.scss';

export const FormDiv = ({title, value, changeParameter, type})=>{
    return(
      <form className="inputGroup">
        <label className="inputBox">
          {title}
          <input 
            type={type}
            value={value}
            onChange={e=>changeParameter(e.target.value)}
          />
        </label>
      </form>
    )
  }

  export default FormDiv;
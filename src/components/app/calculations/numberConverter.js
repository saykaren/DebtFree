import React, { useState } from 'react';
import './../App.css';

const numberConverter =(value) =>{
    return parseFloat((value).toFixed(2));
  };

export default numberConverter;
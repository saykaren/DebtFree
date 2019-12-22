import React, { useState } from 'react';
import './../../stylesheet/App.scss';

const numberConverter =(value) =>{
    return parseFloat((value).toFixed(2));
  };

export default numberConverter;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import styled, { css } from "styled-components";
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


function App() {
  return (
 
<StockMarketRect>
<Button  variant="contained">Stock Market</Button>
</StockMarketRect>

 
  );
}

const StockMarketRect = styled.div`
  width: 100vw;
  height: 5vh;
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(17,198,108,0) 100%);

  margin-top: 25vh;
  margin-left:0vw;
`;

export default App;

 
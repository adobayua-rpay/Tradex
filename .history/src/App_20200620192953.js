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
  <Container>
<StockMarketRect>
<Button variant="contained">Stock Market</Button>

</StockMarketRect>

  </Container>
  );
}

const StockMarketRect = styled.div`
  width: 10vw;
  height: 5vh;
  background-color: #E6E6E6;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  margin-top: 21px;
`;

export default App;

 
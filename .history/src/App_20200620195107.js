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
<Button variant="contained" 
style={{
                    height: "5vh",
                    width: "100vw",
                    marginTop: "30vh",
                    marginLeft: "0vw"
                  }}
                 
                >
                  Stock Market
                </Button>

    </Container>
  );
}
const Container = styled.div`
display: flex;
background-color: #ffffff;
flex-direction: column;
height: 100vh;
width: 100vw;
`;

export default App;
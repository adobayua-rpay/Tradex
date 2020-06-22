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
  const screen = styled.div
  return (
    <Container>
<Button variant="contained" 
style={{
                    height: "5vh",
                    width: "15vw",
                    marginTop: "0vh",
                    marginLeft: "2.5vw"
                  }}
                 
                >
                  Stock Market
                </Button>
                <Button variant="contained" 
style={{
                    height: "5vh",
                    width: "15vw",
                    marginTop: "40vh",
                    marginLeft: "-14.9vw"
                  }}
                 
                >
                 Trade
                </Button>
                <Button variant="contained" 
style={{
                    height: "5vh",
                    width: "15vw",
                    marginTop: "60vh",
                    marginLeft: "-14.9vw"
                  }}
                 
                >
                Research
                </Button>

    </Container>
  );
}
Container = styled.div`
display: flex;
background-color: rgba(240,85);
flex-direction: column;
height: 100vh;
width: 100vw;
`;

export default App;
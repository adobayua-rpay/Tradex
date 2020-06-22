import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import styled, { css } from "styled-components";
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { StyleSheet, View, Text, Image } from "react-native";
import { makeStyles } from '@material-ui/core/styles';
//import { StyleSheet, View, Text, Image } from "react-native";



 function App() {
  const screen = styled.div
  return (
    <View style={styles.container}>
   
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
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcomeAdoba: {
    fontFamily: "Avenir",
    width: wp('30.5%'),
    height: hp('3.5%'),
    color: "#121212",
    fontSize: 15,
    marginTop:  hp('5%'),
    marginLeft: wp('5%')
  },
});
export default App;
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
    var symbolName = 'Facebook Inc.';
    var symbol = 'FB';
    document.addEventListener('DOMContentLoaded', () => {
      // https://financialmodelingprep.com/developer/docs
      getRequest(
        'https://financialmodelingprep.com/api/v3/stock/gainers?apikey=137765ad0e9db27136a01bd2bf07d452',
        drawOutput
      );
   
      function drawOutput(responseText) {
     
           let resp = Object.values(JSON.parse(responseText).mostGainerStock);
   
   
        let $table = document.createElement("table");
        $table.className += " table";
   
        var elements = document.querySelectorAll('.stock-name')[0];
   
        let $head = document.createElement("thead");
        let $body = document.createElement("tbody");
   
        let $lineHader = document.createElement("tr");
   
        for (let i = 0; i < resp.length; i++) {
          let financial = resp[i];
          let $line = document.createElement("tr");
   
   
          for (var key in financial) {
            if (i === 0 && financial.hasOwnProperty(key)) {
              let $ele = document.createElement("th");
              $ele.textContent = key;
              $lineHader.appendChild($ele);
            }
          }
   
          $head.appendChild($lineHader);
          $table.appendChild($head);
   
          for (var key2 in financial) {
            if (financial.hasOwnProperty(key2)) {
              let $eletd = document.createElement("td");
              $eletd.textContent = financial[key2];
              $line.appendChild($eletd);
            }
          }
          $body.appendChild($line)
   
          $table.appendChild($body);
   
        }
   
        document.body.appendChild($table);
      }
   
      function getRequest(url, success) {
        var req = false;
        try {
          req = new XMLHttpRequest();
        } catch (e) {
          try {
            req = new ActiveXObject("Msxml2.XMLHTTP");
          } catch (e) {
            try {
              req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
              return false;
            }
          }
        }
        if (!req) return false;
        if (typeof success != 'function') success = function() {};
        req.onreadystatechange = function() {
          if (req.readyState == 4) {
            if (req.status === 200) {
              success(req.responseText)
            }
          }
        }
        req.open("GET", url, true);
        req.send(null);
        return req;
      }
    })
   
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
  
  },
});
export default App;
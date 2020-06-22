//import LinearGradient from "react-native-linear-gradient";
import React, { Component } from "react";
import { Icon, Button, Image, StyleSheet, Text, Alert, View,TouchableHighlight } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import { Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-web-linear-gradient';
//import { LinearGradient } from 'expo-linear-gradient';

const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);
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

class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style = {styles.marketbutton}>
        {/* <Button variant="contained" color="primary">
  Primary
</Button> */}
<Text style = {styles.text}>
  Stock Market
</Text>
       </View>
       <View style = {styles.tradeRect}>
<Text style = {styles.tradeText}>
  Trade
</Text>

       </View>
       
       <View style = {styles.researchRect}>
<Text style = {styles.researchText}>
  Research
</Text>
        </View>
        <View style = {styles.communityRect}>
<Text style = {styles.communityText}>
 Community
</Text>
        </View>
        <View style = {styles.triggersRect}>
        <TouchableHighlight style={styles.button} underlayColor={"COLOR"} style = {styles.button} onPress = {() => this.onClickView()}>
   <View />
</TouchableHighlight>
<Text style = {styles.triggersText}>
 Triggers
</Text>
        </View>
        <View style = {styles.podsRect}>
<Text style = {styles.podsText}>
Pods
</Text>
        </View>
      
        <LinearGradient colors={['#22c1c3', '#fdfffe']} style={styles.portfolioRect}>
  <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
</LinearGradient>
<Text style = {styles.portfolioText}>
Portfolio
</Text>
       
<LinearGradient colors={['#22c1c3', '#8fcd26']} style={styles.gainersRect}>
  <Text style={styles.buttonText}>
    Gainers
  </Text>
</LinearGradient>

<LinearGradient colors={['#340bdb', '#cd2634']} style={styles.losersRect}>
  <Text style={styles.buttonText}>
   Losers
  </Text>
</LinearGradient>
        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:wp('100%'),
    height:hp('100%'),
    backgroundColor: "#0a0a0a"
  },
  portfolioRect:{
    marginLeft: wp('25.5%'),
    backgroundColor: "#ffffff",
    width:wp('50.5%'),
      height:hp('35.2%'),
      borderRadius: "5px",
      marginTop: hp('-74.5%'),
      },
  marketbutton:{
  marginLeft: wp('2.5%'),
  width:wp('10.5%'),
  height:hp('5.2%'),
  marginTop: hp('25.5%'),
  borderRadius: "5px",
  backgroundColor: "#c7bbbb"
  },

  tradeRect:{
marginLeft: wp('2.5%'),
backgroundColor: "#ffffff",
width:wp('10.5%'),
  height:hp('5.2%'),
  borderRadius: "5px",
  marginTop: hp('4.5%'),
  },
  text:{
    fontFamily: "Futura",
    color: "#121212",
    fontSize: 15,
    marginLeft: wp('0.5%'),
    width:wp('15%')
    
  },
  tradeText:{
    fontFamily: "Futura",
    color: "#121212",
    fontSize: 15,
    marginLeft: wp('0.5%'),
    marginTop:hp('0%'),
    width:wp('15%')
    
  },
  researchRect:{
    marginLeft: wp('2.5%'),
    backgroundColor: "#ffffff",
    width:wp('10.5%'),
      height:hp('5.2%'),
      borderRadius: "5px",
      marginTop: hp('4.5%'),
      },
      researchText:{
        fontFamily: "Futura",
        color: "#121212",
        fontSize: 15,
        marginLeft: wp('0.5%'),
        marginTop:hp('0%'),
        width:wp('15%')
        
      },
      communityRect:{
        marginLeft: wp('2.5%'),
        backgroundColor: "#ffffff",
        width:wp('10.5%'),
          height:hp('5.2%'),
          borderRadius: "5px",
          marginTop: hp('4.5%'),
          },
          communityText:{
            fontFamily: "Futura",
            color: "#121212",
            fontSize: 15,
            marginLeft: wp('0.5%'),
            marginTop:hp('0%'),
            width:wp('15%')
            
          },
          triggersRect:{
            marginLeft: wp('2.5%'),
            backgroundColor: "#ffffff",
            width:wp('10.5%'),
              height:hp('5.2%'),
              borderRadius: "5px",
              marginTop: hp('4.5%'),
              },
              triggersText:{
                fontFamily: "Futura",
                color: "#121212",
                fontSize: 15,
                marginLeft: wp('0.5%'),
                marginTop:hp('0%'),
                width:wp('15%')
                
              },

              podsRect:{
                marginLeft: wp('2.5%'),
                backgroundColor: "#ffffff",
                width:wp('10.5%'),
                  height:hp('5.2%'),
                  borderRadius: "5px",
                  marginTop: hp('4.5%'),
                  },
                  podsText:{
                    fontFamily: "Futura",
                    color: "#121212",
                    fontSize: 15,
                    marginLeft: wp('0.5%'),
                    marginTop:hp('0%'),
                    width:wp('15%')
                    
                  },
                  
                      portfolioText:{
                        fontFamily: "Futura",
                        color: "#121212",
                        fontSize: 25,
                        marginLeft: wp('2.5%'),
                        marginTop:hp('2.5%'),
                        width:wp('15%')
                        
                      },
                      gainersRect:{
                        marginLeft: wp('25.5%'),
                        backgroundColor: "#a11818",
                        width:wp('25.5%'),
                    //    height:hp('35%'),
                          height:hp('25.2%'),
                          borderRadius: "5px",
                          marginTop: hp('-5%'),
                          },

                          losersRect:{
                            marginLeft: wp('51.5%'),
                            backgroundColor: "#a11818",
                            width:wp('25.5%'),
                        //    height:hp('35%'),
                              height:hp('25.2%'),
                              borderRadius: "5px",
                              marginTop: hp('-25.25%'),
                              },
    
});

export default App;

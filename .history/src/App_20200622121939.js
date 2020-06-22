//import LinearGradient from "react-native-linear-gradient";
import React, { Component } from "react";
//import topgainers from '/Users/adobayua/Desktop/myapp/src/topgainers.js'
import { Icon, Button, Image, StyleSheet, Text, Alert, View,TouchableHighlight } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import { Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-web-linear-gradient';
//import { AgGridReact } from 'ag-grid-react';
import MaterialTable from "material-table";
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import topgainers from './topgainers'
var cors = require('cors')



var request = require("request");

//import { Table, Column } from 'sticky-react-table';

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
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    // marginLeft: wp('25.5%'),
    //                 //    backgroundColor: "#a11818",
    //                     width:wp('25.5%'),
    //                 //    height:hp('35%'),
    //                       height:hp('25.2%'),
    //                       borderRadius: "5px",
    //                       marginTop: hp('-5%'),
  },
});


  


function topGainers(){
  var options = { method: 'GET',
  url: 'https://financialmodelingprep.com/api/v3/gainers',
  qs: { apikey: '137765ad0e9db27136a01bd2bf07d452' },
  headers: 
   { 'postman-token': '8dfd9e28-85b2-e5dd-4e0f-e6bc1b4855f2',
     'cache-control': 'no-cache' } };
  
  request(options, function (error, response, body) {
  if (error) throw new Error(error);
  
  var jsonParsed = JSON.parse(body);
  //console.log(jsonParsed[2].ticker)
  
  var topGainerTicker = jsonParsed[0].ticker
  console.log (topGainerTicker)
  var top2GainerTicker = jsonParsed[1].ticker
  var top3GainerTicker = jsonParsed[2].ticker
  var top4GainerTicker = jsonParsed[3].ticker
  var top5GainerTicker = jsonParsed[4].ticker
  
  var topGainerTickerChange = jsonParsed[0].changes
  var top2GainerTickerChange = jsonParsed[1].changes
  var top3GainerTickerChange = jsonParsed[2].changes
  var top4GainerTickerChange = jsonParsed[3].changes
  var top5GainerTickerChange = jsonParsed[4].changes
  
  var topGainerChangepct = jsonParsed[0].changesPercentage
  var top2GainerChangepct = jsonParsed[1].changesPercentage
  var top3GainerChangepct = jsonParsed[2].changesPercentage
  var top4GainerChangepct = jsonParsed[3].changesPercentage
  var top5GainerChangepct = jsonParsed[4].changesPercentage
  
  var topGainerPrice = jsonParsed[0].price
  var top2GainerPrice = jsonParsed[1].price
  var top3GainerPrice = jsonParsed[2].price
  var top4GainerPrice = jsonParsed[3].price
  var top5GainerPrice = jsonParsed[4].price
  
  
  var topGainercompanyName = jsonParsed[0].companyName
  var top2GainercompanyName = jsonParsed[1].companyName
  var top3GainercompanyName = jsonParsed[2].companyName
  var top4GainercompanyName = jsonParsed[3].companyName
  var top4GainercompanyName = jsonParsed[4].companyName
  
  
  });
  
}


class App extends Component {

  


  render() {
    
  
   // const classes = useStyles();

    
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
       
<LinearGradient colors={['#22c1c3', '#32de84']} style={styles.gainersRect}>
  <Text style={styles.buttonText}>
    Gainers
  </Text>
  <Table>
      <Thead>
        <Tr>
          <Th>Event</Th>
          <Th>Date</Th>
          <Th>Location</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{topgainers.top2GainerPrice }</Td>
          <Td>9 April 2019</Td>
          <Td>East Annex</Td>
        </Tr>
        <Tr>
          <Td>Capstone Data</Td>
          <Td>19 May 2019</Td>
          <Td>205 Gorgas</Td>
        </Tr>
        <Tr>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
        </Tr>
      </Tbody>
    </Table>
      
  <div className="ag-theme-alpine" style={ {height: '200px', width: '600px'} }>
       
      </div>


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
                          tableau:{
                            marginLeft: wp('45.5%'),
                          //  backgroundColor: "#a11818",
                            width:wp('5.5%'),
                        //    height:hp('35%'),
                              height:hp('15.2%'),
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
                              marginTop: hp('-35.25%'),
                              },
    
});
// const rootElement = document.getElementById('root');
// ReactDOM.render(<MyTable />, rootElement);

export default App;

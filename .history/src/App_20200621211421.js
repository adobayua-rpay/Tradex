//import LinearGradient from "react-native-linear-gradient";
import React, { Component } from "react";
import { Icon, Button, Image, StyleSheet, Text, Alert, View,TouchableHighlight } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import { Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-web-linear-gradient';
//import { AgGridReact } from 'ag-grid-react';
import MaterialTable from "material-table";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ReactDOM from 'react-dom';
var request = require("request");
import topgainers from 'src/topgainers.js'
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
    marginLeft: wp('25.5%'),
                    //    backgroundColor: "#a11818",
                        width:wp('25.5%'),
                    //    height:hp('35%'),
                          height:hp('25.2%'),
                          borderRadius: "5px",
                          marginTop: hp('-5%'),
  },
});


  




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    function createData(ticker, changes, price, changePercentage, companyName) {
    return {ticker, changes, price, changePercentage, companyName};
    }
    

      var options = { method: 'GET',
    url: 'https://financialmodelingprep.com/api/v3/losers',
    qs: { apikey: '137765ad0e9db27136a01bd2bf07d452' },
    headers: 
     { 'postman-token': '8dfd9e28-85b2-e5dd-4e0f-e6bc1b4855f2',
       'cache-control': 'no-cache' } };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
   
  
   
  // access elements
  
  
    // json data
   //console.log(body.ticker[1])
   var jsonParsed = JSON.parse(body);
  // console.log(jsonParsed[2].ticker)
  
   var topLoserTicker = jsonParsed[0].ticker
   var top2Losericker = jsonParsed[1].ticker
   var top3LoserTicker = jsonParsed[2].ticker
   var top4LoserTicker = jsonParsed[3].ticker
   var top5LoserTicker = jsonParsed[4].ticker
  
   var topLoserTickerChange = jsonParsed[0].changes
   var top2LoserTickerChange = jsonParsed[1].changes
   var top3LoserTickerChange = jsonParsed[2].changes
   var top4LoserTickerChange = jsonParsed[3].changes
   var top5LoserTickerChange = jsonParsed[4].changes
  
   var topLoserChangepct = jsonParsed[0].changesPercentage
   var top2LoserChangepct = jsonParsed[1].changesPercentage
   var top3LoserChangepct = jsonParsed[2].changesPercentage
   var top4LoserChangepct = jsonParsed[3].changesPercentage
   var top5LoserChangepct = jsonParsed[4].changesPercentage
  
   var topLoserPrice = jsonParsed[0].price
   var top2LoserPrice = jsonParsed[1].price
   var top3LoserPrice = jsonParsed[2].price
   var top4LoserPrice = jsonParsed[3].price
   var top5LoserPrice = jsonParsed[4].price
  
   
   var topLosercompanyName = jsonParsed[0].companyName
   var top2LosercompanyName = jsonParsed[1].companyName
   var top3LosercompanyName = jsonParsed[2].companyName
   var top4LosercompanyName = jsonParsed[3].companyName
   var top4LosercompanyName = jsonParsed[4].companyName
  console.log (top3LosercompanyName);

  const rows = [

    createData('Frozen Yoghurt', 159, 6.0, 24, 4.0 ),
    createData(top3LosercompanyName, 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Ginger', 3.7, 67, 4.3),
    createData ('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  });
  

    
   
  
  

    
  }

  

  render() {
    const classes = useStyles();

    return (
      <View style={styles.container}>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

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

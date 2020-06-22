var request = require("request");




var options = { method: 'POST',
  url: 'http://financialmodelingprep.com/api/v3/gainers',
  qs: { apikey: '137765ad0e9db27136a01bd2bf07d452' },
  headers: 
   { 'postman-token': '9f1c826c-2944-9d20-bc5c-3fbb375bf3c5', 'Access-Control-Allow-Origin': '*',
     'cache-control': 'no-cache',  } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);


    var jsonParsed = JSON.parse(body.toString);
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
//});




//     var options = { method: 'GET',
//     url: 'https://financialmodelingprep.com/api/v3/gainers',
//     qs: { apikey: '137765ad0e9db27136a01bd2bf07d452' },
//     headers: 
//      { 'postman-token': '8dfd9e28-85b2-e5dd-4e0f-e6bc1b4855f2',
//        'cache-control': 'no-cache' } };
  
//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);

   
   //console.log(jsonParsed[2].ticker)
  
 
  
  //});



function topLosers(){
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


});


}
var request = require("request");

var options = { method: 'GET',
  url: 'https://financialmodelingprep.com/api/v3/gainers',
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
 console.log(jsonParsed[2].ticker)

 var topGainerTicker = jsonParsed[0].ticker
 var top2GainerTicker = jsonParsed[1].ticker
 var top3GainerTicker = jsonParsed[2].ticker
 var top4GainerTicker = jsonParsed[3].ticker
 var top5GainerTicker = jsonParsed[4].ticker

 var topGainerTickerChange = jsonParsed[0].changes
 var top2GainerTickerChange = jsonParsed[1].changes
 var top3GainerTickerChange = jsonParsed[2].changes
 
});


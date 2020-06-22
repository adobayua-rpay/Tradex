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
  var jsonData = body;

  // parse json
var jsonParsed = JSON.parse(jsonData);
var array = [jsonParsed]
 // console.log(jsonParsed.ticker[1]);
 // console.log(array[2]);
// console.log(array)
 console.log(array[5])
 var x = jsonData.ticker;

 console.log(x)
});


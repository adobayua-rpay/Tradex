var request = require("request");
const cors = require('cors');

const fetch = require('node-fetch');
// var options = { method: 'GET',
//   url: 'http://financialmodelingprep.com/api/v3/gainers',
//   qs: { apikey: '137765ad0e9db27136a01bd2bf07d452' },
//   headers: 
//    { 'postman-token': '8e1106f2-7d0f-af2f-b28f-2715b4a55bd3', 
//    'Access-Control-Allow-Origin': 'https://cors-anywhere.herokuapp.com/http://financialmodelingprep.com/api/v3/gainers?apikey=137765ad0e9db27136a01bd2bf07d452',
//      'cache-control': 'no-cache' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

// // console.log(body);
//   response.setHeader("Access-Control-Allow-Origin", "*");
//   response.setHeader("Access-Control-Allow-Credentials", "true");
//   response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  
//   console.log(body);
//   var jsonParsed = JSON.parse(response.bodybody.toString);
//     var topGainerTicker = jsonParsed[0].ticker
//  console.log (topGainerTicker)
//    var top2GainerTicker = jsonParsed[1].ticker
// });

var url ='http://financialmodelingprep.com/api/v3/gainers';
var headers = {
  "Content-Type": "application/json",
  "apikey": "137765ad0e9db27136a01bd2bf07d452",
  'Access-Control-Allow-Origin': 'https://trade.dsczvgn64ow6l.amplifyapp.com/',
  'Access-Control-Allow-Headers': 'origin',
  "Access-Control-Allow-Headers": Accept
 // "client_secret": "876JHG76UKFJYGVHf867rFUTFGHCJ8JHV"
}
// var data = {
//   "name": "Wade Wilson",
//   "occupation": "Murderer",
//   "age": "30 (forever)"
// }
fetch(url, { method: 'GET', headers: headers})
  .then((res) => {
     return res.json()
})
.then((json) => {
 // console.log(json);
 // var jsonParsed = JSON.parse(json.toString);
  var topGainerTicker = json[2].ticker
  console.log(topGainerTicker)
  // Do something with the returned data.
});
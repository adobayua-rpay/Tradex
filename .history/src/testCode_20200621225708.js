var xhr = new XMLHttpRequest();

var data = null;


xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://financialmodelingprep.com/api/v3/gainers?apikey=137765ad0e9db27136a01bd2bf07d452");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "747389e3-7d02-37f8-34f7-cd9fafeb7fc8");

xhr.send(data);
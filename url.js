const http = require("http")

var adr = 'http: //localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(Adr, true);


console.log(q.host);
console.log(q.pathname);
console.log(q.search);


var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
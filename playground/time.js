var moment = require('moment');

var date = moment();
date.add(3, 'hours').subtract(11, 'minutes');

console.log(date.format("h:m A"));
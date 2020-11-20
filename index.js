const fcbn = require('./utils/findCityByName')
console.log(fcbn('Chongqing'))
const mm  = require('airport-data')
var City = mm.filter(function(item) {
            return (item.id>1) })
            
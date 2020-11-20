const findCityByName = require('./findCityByName')
const distFrom = require('distance-from')
const airports = require('airport-data')
const Sun = require('sunrise-sunset-js')
const Sun1 = require('sunriset')
const sunriset = require('sunriset')
const findSunriseAndSUnset = function(cityName){
    const cityData = findCityByName(cityName)
    const cityLoc = cityData.loc.coordinates.reverse()
    for(var ii=0;ii<=findCityByName.length;ii=ii+1){
        var City  = findCityByName[ii]
    }
    const cityname = cityData.name
    SunRise = Sun.getSunrise
    SunSet= Sun.getSunset
    const getSunriseTime = sunriset(new Date(), cityLoc)
    if(cityName===cityname){
        console.log(getSunriseTime)
    }
    return findSunriseAndSUnset
}
console.log(findSunriseAndSUnset('Chengdu'))
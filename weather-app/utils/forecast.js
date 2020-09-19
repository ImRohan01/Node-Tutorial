const request = require('postman-request')

forecast = (latitude,longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a5e85b539cb2e712e16060bcd0b61546&query=${latitude},${longitude}`
    request({url : url, json : true}, (error, response) => {
        if(error){
            callback("Unable to connect to weather services",undefined)
        }
        else if(response.body.error,undefined){
            callback("Unable to find location")
        }
        else{
            callback(undefined,"The temperature is currently " + response.body.current.temperature + " deg, but it feels like " + response.body.current.feelslike + ' deg.')
        }
    })
}


module.exports = forecast
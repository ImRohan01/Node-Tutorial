const forecast = require('./utils/forecast.js')
const geocode = require('./utils/geocode.js')

const address = process.argv[2]

if (!address){
    console.log("Please provide an address as a command line argument!")
    exit(-1)
}

geocode(address,(error, data) => {
    if(error){
         return console.log(error)
    }
    forecast(data.latitude, data.longitude,(error, res) => {
        if(error){
            return console.log(error)
       }
        console.log(data.location)
        console.log(res)
    })
})
const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=270e9849b424dacf2fa4336b32cd668b&query=${latitude},${longitude}&units=f`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback(`Unable to find location`, undefined);
        } else {
            const { temperature, feelslike, weather_descriptions } =
                body.current;
            callback(
                undefined,
                weather_descriptions[0] +
                    ` It is currently ${temperature} degress out. It feels like ${feelslike} degrees out.`
            );
        }
    });
};

module.exports = forecast;

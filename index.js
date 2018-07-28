let request = require('request');
let apiKey = '07a9b905c3a683d326712595c61992bd';
let city = 'Delhi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    let p = weather.main;
    console.log(p.temp);
    if(err){
        console.log('error:', error);
    } else {
        console.log('body:', body);
    }
    console.log(message);
    return p.temp;
});
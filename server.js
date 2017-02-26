var express = require('express');
var app = express();
"use strict";

app.get('/', function (req, res) {
    var template = `<h1>FCC Timestamp microservice</h1>
                        <h3>Example usage</h3>
                        <p>https://hoath-fcc-timestamp.herokuapp.com/December%2015,%202015</p>
                        <p>https://hoath-fcc-timestamp.herokuapp.com/1450137600</p>

                        <h3>Example usage</h3>
                        { "unix": 1450137600, "natural": "December 15, 2015" }`;

    res.send(template);
})

app.get('/:date', function (req, res) {
    //decode URI
    var param = decodeURIComponent(req.params.date);

    var unixTime, naturalTime;

    if (isNaN(param)) {
        unixTime = new Date(param).getTime() / 1000;
        naturalTime = param;
    } else {
        unixTime = param;
        naturalTime = new Date(Number(param));
    }

    var result = {
        unix: unixTime,
        natural: naturalTime
    }
    res.send(JSON.stringify(result));
})


app.listen(process.env.PORT || 3000, function () {
    console.log('Server is listening on port 3000!');
})
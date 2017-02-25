    var express = require('express');
    var app = express();
    "use strict";

    app.get('/:date', function (req, res){
        //decode URI
        var param = decodeURIComponent(req.params.date);

        var unixTime, naturalTime;
        
        if(isNaN(param)){
            unixTime = new Date(param).getTime()/1000;
            naturalTime = param;
        }else {
            console.log(new Date(Number(param)));
            unixTime = param;
            naturalTime = new Date(Number(param));
        }

        var result = {
            unix: unixTime,
            natural: naturalTime
        }
        res.send(JSON.stringify(result));
    })


    app.listen(process.env.PORT || 3000, function(){
        console.log('Server is listening on port 3000!');
    })
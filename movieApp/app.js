var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs")

//======================Routes

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var search = req.query.searchTerm;
    var url = "http://omdbapi.com/?s=" + search;
    request(url, function(error, response, body){
       if(!error && response.statusCode == 200){
          //changes the JSON str into an object
          var data = JSON.parse(body);
          res.render("results", {data: data}); 
       }
   }); 
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has been fired up!");
});

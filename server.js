var express = require('express');
var path = require('path');
//var GoogleMapsLoader = require('google-maps');
var api = require('indeed-api').getInstance("719253724258089");

var app = express();

app.use(express.static(path.join(__dirname, 'public')));




app.get('/indeed', function(req, res){

// do a job search 
	api.JobSearch()
		.Radius(20)
		.WhereLocation({
			city : "Los Angeles",
			state : "CA"
		})
		.Limit(2)
		.IncludePosition(true)
		.WhereKeywords(["Information Technology"])
		.SortBy("date")
		.UserIP("1.2.3.4")
		.UserAgent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36")
		.Search(
			function (results) {
			// do something with the success results 

			res.json(results);
			// console.log(results);
		},
			function (error) {
			// do something with the error results 
			// console.log(error);
		});

});

app.all('*', function(req, res){
	res.sendFile('/public/index.html', {root: __dirname})
});



app.listen(3000);








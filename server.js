// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app

var bodyParser = require('body-parser');
// use it!
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
});
// post route for adding a user
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
var user= {
    name: req.body.name,
    location:req.body.location,
    language:req.body.language,
    comment: req.body.comment
}
console.log(user);
res.render('user', {post_data: req.body});
});
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});

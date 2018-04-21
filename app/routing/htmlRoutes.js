//GET route refers to this required path
var path = require('path');

module.exports = function(app){
    //GET route to /survey which displays the servey page page
    app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
  
    //default catch-all route which leads to home page
    app.use(function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
  };

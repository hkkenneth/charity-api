var express = require("express"),
    mongodb = require('mongodb'),
    storage = require('./subscription.js');

var app = express()
  , bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;  // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();  // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/health-check)
router.get('/health-check', function(req, res) {
  console.log('/health-check');
  res.json({ message: 'charity-api running properly' });
});

// more routes for our API will happen here
router.post('/settings', function(req, res) {
 // console.log(req.body.regId);
 // console.log(req.body.preRegId);
 // console.log(req.body.payload);
  console.log(req.body);
  storage.save('GCM', req.body.regId, JSON.parse(req.body.payload), function(result){
    console.log(result);
    res.json({ message: 'done' });
  });
});

// REGISTER OUR ROUTES
app.use('', router);

// START THE SERVER
// =============================================================================
app.listen(port);


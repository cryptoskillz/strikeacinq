'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var bodyParser = require( 'body-parser' );

module.exports = app; // for testing


// use body parser so we can get info from POST and/or URL parameters
app.use( bodyParser.urlencoded( {
	extended: false
} ) );
app.use( bodyParser.json() );

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});

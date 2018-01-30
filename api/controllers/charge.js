'use strict';
/*
  This module calls a the Charge API and creates a charge
*/


var util = require('util');
module.exports = {
  charge: charge
};


function charge(req, res) 
{
  //set the vars
  var amount = 0;
  var currency = "btc" ;
  var description = "thing";
  //get the vars
  amount = req.query.amount
  currency = req.query.currency
  description = req.query.description

  //debug
  //console.log(amount) 
  //console.log(currency) 
  //console.log(description) 

  //require node libcurl
  var Curl = require( 'node-libcurl' ).Curl;
  //ceate a new instance
  var curl = new Curl();
  //set the charge url
  curl.setOpt( 'URL', 'https://api-strike.acinq.co/api/v1/charges' );
  curl.setOpt( 'FOLLOWLOCATION', true );
  //please replace your key here https://strike.acinq.co/#/dashboard/account/apikeys this is my test key. 
  curl.setOpt( 'USERNAME', 'sk_DbtMYVfvzdu1WACermKq2JVMq87CMK38znj9qNXCRj9k' );
  curl.setOpt('POST', 1); // true?
  //set the post, note this would come from your request to the server.  I use Swagger.
  curl.setOpt( 'POSTFIELDS', "amount="+amount+"&currency="+currency+"&description="+description);
  curl.on( 'end', function( statusCode, body, headers ) {
      var obj = JSON.parse(body);
      //output the payment request
      //NOTE here you would store this information in your database for processing on the confirmation.
      res.json(obj.payment_request);
      this.close();
  });
  curl.on( 'error', curl.close.bind( curl ) );
  curl.perform();

}

'use strict';
/*
  This module listens for a paymet to complete.

  user https://ngrok.com/  and set this as your call back url in charge for testing which can be set here https://strike.acinq.co/#/dashboard/account/hooks
*/


var util = require('util');
module.exports = {
  callback: callback
};


function callback(req, res) 
{
  //NOTE do what you want with the post object here you owuld math this with what you stored during the charge call.
  console.log(req.body)

}

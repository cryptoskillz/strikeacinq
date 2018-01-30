
$( document ).ready(function() {
  //set the URL
  //note Change this to your local / server location.
  var url = "http://127.0.0.1:10010/charge?amount=100&currency=btc&description=thing2"
   $.ajax({url: url, success: function(result){
       console.log(result)
       //get the result
       var payment_request = result;
       //set the qr code for payment
       new QRious({
          element: document.getElementById('qr'),
          value: payment_request
      });
    }});
});
